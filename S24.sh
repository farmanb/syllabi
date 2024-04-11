#!/usr/bin/env bash

# Syllabi
pretext build 1031-S24 && pretext build 3040-S24 && pretext build 63057 && pretext build 63167

# Schedules

pretext build schedule-63057 && pretext build schedule-63167 && pretext build schedule-1031-S24 && pretext build schedule-3040-S24
