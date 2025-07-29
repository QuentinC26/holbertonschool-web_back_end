#!/usr/bin/env python3
'''
create a generator
'''
import asyncio
import random
from typing import Union, 


async def async_generator() -> Generator[float, none, none]:
    '''
    create a generator
    '''
    for index in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
