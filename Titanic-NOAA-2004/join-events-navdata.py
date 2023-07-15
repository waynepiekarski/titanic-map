#!/usr/bin/python3

import datetime
import sys

events=sys.argv[1]
navdata=sys.argv[2]

# TIME UTM_X UTM_Y LAT_DD LONG_DD HDG PITCH ROLL DEPTH_M ALT_M
# 1086121531.0 587390.181003 4620861.424862 41.73476268 -49.94914705 111.480, 0.050, 0.790, 254.546 2.030
coords = {}
with open(navdata) as file:
    # print("Opening navdata {}".format(navdata))
    for _line in file:
        line = _line.rstrip()
        s = line.split(" ")
        if s[0] == "TIME":
            continue
        # print("{}".format(line))
        i = int(float(s[0]))
        latitude = s[3]
        longitude = s[4]
        try:
            depth = s[8]
        except:
            depth = -1
        values = [latitude, longitude, depth]
        coords[i] = values

with open(events) as file:
    # print("Opening events {}".format(events))
    for _line in file:
        line = _line.rstrip()
        s = line.split(" ")
        i = int(s[0])
        d = datetime.datetime.utcfromtimestamp(i)
        if i in coords:
            elem = coords[i]
            # c = "MATCH: 2004-NAME-{},{},{},{},\"{}\",\"NOAA 2004 Dive N\"".format(i, elem[0], elem[1], elem[2], line)
            c = "2004-NAME-{},{},{},{},\"{}\",\"NOAA 2004 Dive N\"".format(i, elem[0], elem[1], elem[2], line)
            print("{}".format(c))
            # print("{} {} == {}".format(d, line, c))
        else:
            c = "NOT_FOUND"
            print("{} {} == {}".format(d, line, c))
