#!/bin/bash
# Claude Codeが許可を求めている時の通知

osascript -e 'display notification "Claude Codeが許可を待っています" with title "Claude Code" subtitle "アクションが必要です" sound name "Ping"'
