#!/usr/bin/python3

import datetime
import sys

for input in sys.argv[1:]:
    print("Opening input {}".format(input))
    min_ts = None
    max_ts = None
    with open(input) as file:
        for _line in file:
            line = _line.rstrip()
            s = line.split(" ")
            if s[0] == "TIME":
                continue
            i = float(s[0])
            d = datetime.datetime.utcfromtimestamp(i)
            if min_ts == None or i < min_ts:
                min_ts = i
            if max_ts == None or i > max_ts:
                max_ts = i
            print("{} {}".format(d, line))
        print("Min={} {}, Max={} {}".format(min_ts, datetime.datetime.utcfromtimestamp(min_ts), max_ts, datetime.datetime.utcfromtimestamp(max_ts)))
