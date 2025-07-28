#!/usr/bin/env python3
"""
add a annotation for function with callable object
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    add a annotation for function with object callable
    """
    def other_multiplier(new_multiplier: float) -> Callable[[float], float]:
        """
        add a annotation for function with object callable
        """
        return multiplier * new_multiplier
    return other_multiplier
