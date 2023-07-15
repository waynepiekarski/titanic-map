#!/usr/bin/python3

from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas
import sys

filename = sys.argv[1]
points = pandas.read_csv(filename, delimiter=' ')

print("** Column headers")
print(points.columns.tolist())

print("** Filtering invalid data")
points.drop(points[(points.UTM_X < 570000) | (points.UTM_X > 600000) | (points.UTM_Y < 4600000) | (points.UTM_Y > 4630000)].index, inplace=True)

# Optionally remove all points that are from the dive to the bottom, a lot of time is spent there
points.drop(points[(points.DEPTH_M < 3740)].index, inplace=True)

print("** Entire table")
print(points)

print("** Plotting 3D")
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
ax.invert_zaxis()
ax.set_xlabel('UTM X')
ax.set_ylabel('UTM Y')
ax.set_zlabel('Depth')
ax.set_title(filename)
ax.ticklabel_format(style='plain')

time = points['TIME'].values
x = points['UTM_X'].values
y = points['UTM_Y'].values
z = points['DEPTH_M'].values

print("TIME: min={}, max={}, diff={}".format(min(time), max(time), max(time)-min(time)))
print("X: min={}, max={}, diff={}".format(min(x), max(x), max(x)-min(x)))
print("Y: min={}, max={}, diff={}".format(min(y), max(y), max(y)-min(y)))
print("Z: min={}, max={}, diff={}".format(min(z), max(z), max(z)-min(z)))

# Normalize the timestamps to start at t=0
min_time = min(time)
time = time - min_time
# Convert from seconds to hours
time = time / 3600

from matplotlib import cm
# https://stackoverflow.com/questions/39753282/scatter-plot-with-single-pixel-marker-in-matplotlib
p = ax.scatter(x, y, z, marker='o', s=(72./fig.dpi)**2, lw=0, c=time, cmap='jet')
fig.colorbar(p)
plt.show()
