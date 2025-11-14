import enum
import json
from dataclasses import is_dataclass, asdict
from pathlib import Path

from sqlalchemy import TypeDecorator, String


class DataclassEncoder(json.JSONEncoder):
    """Simple JSON encoder that encodes dataclasses and enums."""

    def default(self, o):
        if is_dataclass(o):
            return asdict(o)
        if isinstance(o, enum.Enum):
            return o.value
        if isinstance(o, Path):
            return str(o.resolve())
        if hasattr(o, "__do_not_serialize__") and o.__do_not_serialize__:
            raise ValueError(f"Attempting to serialize read-only object of type {type(o)}")
        return super().default(o)


class DataclassType(TypeDecorator):
    """SQLA Type decorator to serialize dataclasses"""

    impl = String
    cache_ok = True

    def __init__(self, base_cls):
        super().__init__()
        self.base_cls = base_cls

    def process_bind_param(self, value, dialect):
        if value is None:
            return None
        return json.dumps(value, cls=DataclassEncoder)

    def process_result_value(self, value, dialect):
        if value is None:
            return None
        result = json.loads(value)
        if hasattr(self.base_cls, "from_dict"):
            return self.base_cls.from_dict(result)
        return self.base_cls(**result)
