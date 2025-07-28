#!/usr/bin/env python3
"""
add a annotation for function with list
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    add a annotation for function with list
    """
    tuple = (k, v * v)
    return tuple
