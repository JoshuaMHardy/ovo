from io import StringIO

import pytest
import yaml
from pydantic_core import ValidationError

from ovo.core.configuration import OVOConfig, ConfigProps, DEFAULT_OVO_HOME


def test_config_default():
    data = yaml.safe_load(StringIO(OVOConfig.default(ConfigProps())))
    data["dir"] = DEFAULT_OVO_HOME
    config = OVOConfig(**data)


def test_config_with_extra_args():
    with pytest.raises(ValidationError):
        data = yaml.safe_load(StringIO(OVOConfig.default(ConfigProps())))
        data["dir"] = DEFAULT_OVO_HOME
        data["foo"] = "bar"
        config = OVOConfig(**data)
