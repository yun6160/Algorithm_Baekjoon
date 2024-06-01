import sys
sys.stdin = open('input.txt', 'r')
# 한 줄을 읽어서 정수로 변환
# N = int(input())
# print(N)
# 한 줄을 읽고 공백으로 구분된 문자를 배열로 
# print(input().split())
# 한 줄을 읽고 공백으로 구분된 문자를 정수로 변환한 배열
# print(list(map(int, input().split())))
# N행으로 이루어진 2차원 배열 입력
# N = int(input())
arr = [list(map(int, input().split())) for _ in range(2)]

hour, minute, second = arr[0]
second += arr[1][0]

minute += second // 60
second %= 60

hour += minute // 60
minute %= 60

hour %= 24

new_time = [hour, minute, second]
print(' '.join(map(str, new_time)))