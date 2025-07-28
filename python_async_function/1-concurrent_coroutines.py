#!/usr/bin/env python3
'''
You will spawn wait_random n times with the specified max_delay.
'''
import asyncio
import random
wait_random = __import__('0-basic_async_syntax').wait_random

async def wait_n(n: int, max_delay: int) -> list[float]:
    '''
    You will spawn wait_random n times with the specified max_delay.
    '''
    return await asyncio.gather(wait_random(max_delay), wait_n(n, max_delay))
