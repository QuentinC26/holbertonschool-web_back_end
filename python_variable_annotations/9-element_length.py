#!/usr/bin/env python3
"""
add a annotation for function with callable object
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    add a annotation for function with object callable
    """
    return [(i, len(i)) for i in lst]
