#include <iostream>

using namespace std;

int main (){
	int i=(1-100);
	
	cin>>i;
	
	if(i>=50 && i<=100){
		cout<<"pass"<<endl;
	}
	
	else if(i<50 && i>=0){
	         
	         cout<<"fail";
	}
	
	else{
		cout<<"someting wrong";
	}
	
	return 0;
}
