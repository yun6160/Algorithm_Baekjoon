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
# arr = [list(map(int, input().split())) for _ in range(N)]
# print(arr)
A,B,V = map(int,input().split())
V -= B # 실제로 올라가야할 거리 (마지막날 미끄러지는 양을 뺀, 마지막날 도달하면 미끄러지지않으니까!)
days = V // (A - B) # 몫
if V % (A - B) != 0:
    days += 1
print(days)