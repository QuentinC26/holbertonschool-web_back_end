#!/usr/bin/env python3
"""
Create a measure_time function with integers n and max_delay
"""
import asyncio
import time
wait_n = __import__("1-concurrent_coroutines").wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Create a measure_time function with integers n and max_delay
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    total_time = time.time()
    return (total_time - start_time) / n
