#!/usr/bin/env python3
'''
Import async_generator from the previous task
'''
import asyncio
import random
from typing import Generator
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> Generator[float, None, float]:
    '''
    Import async_generator from the previous task
    '''
    comprehension_list = []
    async for result in async_generator():
        comprehension_list.append(result)
    return comprehension_list
