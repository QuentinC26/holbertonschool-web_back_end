#!/usr/bin/env python3
'''
Write an asynchronous coroutine that takes in an integer argument
'''
import asyncio
import random
wait_random = __import__('0-basic_async_syntax').wait_random

async def wait_n(n: int, max_delay: int) -> list[float]:
    '''
    Write an asynchronous coroutine that takes in an integer argument
    '''
    return await asyncio.gather(wait_random(max_delay), wait_n(n, max_delay))
