# COC Strats
A tool to help you look up up-to-date Clash Of Clans Attack Strategy based on the
[Clash Of Clans Wiki](https://clashofclans.fandom.com/wiki/Clash_of_Clans_Wiki:Attack_Strategies)

It is going to **filter** data based on your input. so that you can look up attack strategy quickly
and experiment with new strategy when the wiki updates its data

## Installation

### Requirements

- jsdom
- commander

### Guide

Clone this repo
```bash
git clone https://github.com/amengdv/coc-attack-strats.git
```
Add main.sh file and add this command
```
node --no-deprecation "absolute/path/to/main.js" "$@"
```
Add main.sh to your path. You can give it whatever command you want I just named it cocstrats.
So when I want to use it I can type `cocstrats [option]`
## Usage

```
Usage: Coc Attack Strategies [options]

Options:
  -th, --townhall <number>   Specify townhall level
  -tp, --trophies <number>   Specify trophies value
  -tr, --troops <string...>  A list of troops separated by space
  -d, --depth <number>       How much data to display (default: 5)
  -p, --page <number>        Troop data page max=5 (default: 1)
  -h, --help                 display help for command
```
