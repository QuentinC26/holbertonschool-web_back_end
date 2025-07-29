#!/usr/bin/env python3
'''
write a measure_runtime coroutine
'''
import asyncio
import time
async_comprehension = __import__("1-async_comprehension").async_comprehension

async def measure_runtime() -> float :
    start_time = time.time()
    four_parallel = [
        asyncio.create_task(async_comprehension()),
        asyncio.create_task(async_comprehension()),
        asyncio.create_task(async_comprehension()),
        asyncio.create_task(async_comprehension())
    ]
    await asyncio.gather(*four_parallel)
    total_time = time.time()
    return total_time - start_time
