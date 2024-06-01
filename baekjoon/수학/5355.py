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
N = int(input())
arr = [input().split() for _ in range(N)]
result_list = ''


for i, row in enumerate(arr): # 인덱스와 값 모두 필요할 때 enumerate 함수 사용
    result = float(row[0])
    for j in row[1:]: # 인덱스 1부터 끝까지
        if j == '@':
            result *= 3
        elif j == '%':
            result += 5
        elif j == '#':
            result -= 7
    result_list += format(result, ".2f")+'\n'

print(result_list)   
    
    


