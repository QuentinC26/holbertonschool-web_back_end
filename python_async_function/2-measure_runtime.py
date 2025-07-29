#!/usr/bin/env python3
"""
Create a measure_time function with integers n and max_delay
"""
import time
wait_n = __import__("1-concurrent_coroutines").wait_n


def measure_time(n: int, max_delay: int) -> float:
    total_time = time.time()
    return total_time / n
