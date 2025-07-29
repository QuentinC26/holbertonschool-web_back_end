#!/usr/bin/env python3
"""
Take the code from wait_n and alter it into a new function task_wait_n.
"""
import asyncio
from typing import List
import random

wait_random = __import__("0-basic_async_syntax").wait_random
wait_random = __import__("3-tasks").wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    You will spawn wait_random n times with the specified max_delay.
    """
    multiple_wait_random = []
    for index in range(n):
        create_task = asyncio.create_task(wait_random(max_delay))
        multiple_wait_random.append(create_task)
    # end = result
    # i use end for respect pycodestyle restriction
    end = await asyncio.gather(*multiple_wait_random)
    lens = len(end)
    for size in range(lens-1):
        for index in range(lens-size-1):
            if end[index] > end[index + 1]:
                end[index], end[index + 1] = end[index + 1], end[index]
    return end


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    You will spawn wait_random n times with the specified max_delay.
    """
    multiple_task_wait_random = []
    for index in range(n):
        create_task = asyncio.create_task(task_wait_random(max_delay))
        multiple_task_wait_random.append(create_task)
    # end = result
    # i use end for respect pycodestyle restriction
    end = await asyncio.gather(*multiple_wait_random)
    lens = len(end)
    for size in range(lens-1):
        for index in range(lens-size-1):
            if end[index] > end[index + 1]:
                end[index], end[index + 1] = end[index + 1], end[index]
    return end
