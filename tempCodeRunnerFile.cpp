#include<iostream>
using namespace std;
int update(int &i)
{
    i++;
    return i;
}

int main(){
    int num=5;
    cout<<update(num);
}