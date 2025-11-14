#!/bin/bash
#
# Run a script under a timeout that's treated as a success (exit code 0)
#

set -euo pipefail
set -x

# Get timeout duration from the first argument
TIME_LIMIT_SECONDS="$1"
shift

# Run the target command with a timeout
status=0
timeout --preserve-status "$TIME_LIMIT_SECONDS" "$@" || status=$?

# Handle timeout (exit code 124 or 143) gracefully
if [[ "$status" -eq 124 ]] || [[ "$status" -eq 143 ]]; then
    echo "The command timed out after $TIME_LIMIT_SECONDS seconds."
    exit 0  # Not considered a failure
else
    exit "$status"
fi
