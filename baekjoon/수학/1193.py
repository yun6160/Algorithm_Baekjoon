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

n = int(input())
line = 0
line_end_num = 0 #라인의 마지막 요소가 몇번째 분수인지

while n > line_end_num: # 주어진 수가 몇번째 라인인지 확인
    line += 1
    line_end_num += line

K = line_end_num - n #끝번째 수와 주어진 수의 차

if line % 2 == 0: #짝수일때
    top = line - K
    bottom = K + 1
else:
    top = K + 1
    bottom = line - K

print(str(top)+'/'+str(bottom))
