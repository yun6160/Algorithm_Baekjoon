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
N = int(input())
# 2차원 배열을 만들어서 N이 들어있는 배열의 인덱스값 +1 이 답임
# 그러면 N이 들어있는 2차원 배열을 일단 만들면 될듯
# 배열의 길이는 6의 배수로 늘어남

start = 1
end = 1
index = 1
while True:
    if start <= N <= end:
        break
    else:
       start = end + 1
       end = start + (6 * index) -1
       index += 1

print(index)
        
        

