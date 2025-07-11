#include <iostream>

using namespace std;

int main(){
	int age;
	cout<<"Enter your age:";
	cin >>age;
	
	
	
	if(age>18){
	cout<<"adult"<<endl;
	}
	
	else if(age<0){
		cout<<"age can't be negatigve"<<endl;
	}
	else{
		cout<<"teen"<<endl;
	}
	
	return 0;
}