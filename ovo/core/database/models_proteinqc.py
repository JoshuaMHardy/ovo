from typing import List, Callable

from ovo.core.database import DescriptorJob
from ovo.core.database.models import DescriptorWorkflow, WorkflowTypes, Design
from ovo.core.scheduler.base_scheduler import Scheduler
from dataclasses import dataclass


@dataclass
class ProteinQCTool:
    name: str = None
    tool_key: str = None
    supports_conda: bool = False
    supports_multichain: bool = False


SEQ_COMPOSITION = ProteinQCTool(
    name="Sequence Composition",
    tool_key="seq_composition",
    supports_conda=True,
    supports_multichain=True,
)

ESM_1V = ProteinQCTool(
    name="ESM-1v",
    tool_key="esm_1v",
    supports_conda=True,
    supports_multichain=True,
)

ESM_IF = ProteinQCTool(
    name="ESM-IF",
    tool_key="esm_if",
    supports_conda=True,
    supports_multichain=True,
)

DSSP = ProteinQCTool(
    name="DSSP",
    tool_key="dssp",
    supports_conda=True,
    supports_multichain=True,
)

PEPPATCH = ProteinQCTool(
    name="PEP-Patch",
    tool_key="peppatch",
    supports_conda=False,
    supports_multichain=True,
)

PROTEINSOL = ProteinQCTool(
    name="ProteinSol",
    tool_key="proteinsol",
    supports_conda=True,
    supports_multichain=True,
)

PROTEINQC_TOOLS = [SEQ_COMPOSITION, ESM_1V, ESM_IF, DSSP, PEPPATCH, PROTEINSOL]
PROTEINQC_TOOLS_BY_KEY = {tool.tool_key: tool for tool in PROTEINQC_TOOLS}


@WorkflowTypes.register("ProteinQC workflow")
@dataclass
class ProteinQCWorkflow(DescriptorWorkflow):
    tools: List[str] = None

    def submit(self, scheduler: Scheduler, pipeline_name: str = None) -> str:
        # TODO: Submit only if there is not existing running job
        # TODO: Submit only if descriptors are missing
        from ovo import db
        from ovo.core.logic.descriptor_logic import submit_proteinqc

        return submit_proteinqc(
            tools=self.tools,
            scheduler=scheduler,
            designs=db.select(Design, id__in=self.design_ids),
            chains=list(self.chains),
        )

    def process_results(self, job: DescriptorJob, callback: Callable = None):
        from ovo import db
        from ovo.core.logic.descriptor_logic import read_descriptor_file_values

        descriptor_values = read_descriptor_file_values(
            descriptor_job=job,
            # descriptor key prefix (pipeline|tool_key) -> filename to parse
            filenames={f"proteinqc|{tool}": tool for tool in self.tools},
            # mapping from design.id to ID column in produced file
            design_id_mapping={design_id: design_id for design_id in self.design_ids},
        )
        db.save_all(descriptor_values + [job])

    def validate(self):
        super().validate()
        if not self.tools:
            raise ValueError("No tools specified for ProteinQC workflow")
        unsupported_multi_chain_tools = []
        for tool_key in self.tools:
            if tool_key not in PROTEINQC_TOOLS_BY_KEY:
                raise ValueError(
                    f"Invalid ProteinQC tool '{tool_key}', available tools: {', '.join(PROTEINQC_TOOLS_BY_KEY.keys())}"
                )
            # Validate tool_key has multcat hain support enabled
            if len(self.chains) > 1 and not PROTEINQC_TOOLS_BY_KEY[tool_key].supports_multichain:
                unsupported_multi_chain_tools.append(tool_key)
        if unsupported_multi_chain_tools:
            raise NotImplementedError(
                f"Some selected tools do not support multiple chains yet: {', '.join(unsupported_multi_chain_tools)}"
            )
