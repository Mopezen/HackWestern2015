import os
import subprocess


CHROME = os.path.join('C:\\', 'Program Files (x86)', 'Google', 'Chrome', 'Application', 'chrome.exe')
subprocess.call([CHROME, '--no-startup-window'])