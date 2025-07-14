#include <iostream>

using namespace std;

int main(){
	
	int i;
	int total;
	
	
	while(true){
		
		
		cin>> i;
	if(i<=10 && i>0){
		

		total = total + i;
	
		
	}
	
    else if(i>10 && i<0){
    	cout<<"something wrong";
	} 
	
	if(i==0){
		cout<<total<<endl;
		break;
	}
	
	}
	

 	
 	return 0;
     
	
}