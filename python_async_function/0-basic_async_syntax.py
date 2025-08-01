#!/usr/bin/env python3
'''
Write an asynchronous coroutine that takes in an integer argument
'''
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    '''
    Write an asynchronous coroutine that takes in an integer argument
    '''
    random_time = random.uniform(0, max_delay)
    await asyncio.sleep(random_time)
    return random_time
