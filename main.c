/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <stdio.h>
#include <string.h>
void so_strcpy (char str1[20], char str2[20]){
    int cont1 = 0;
    int cont2 = 0;
    while(str1[cont1]!='\0'){
        str2[cont2]=str1[cont1];
        cont1+=1;
        cont2+=1;
    }
}

int
main ()
{
  char strin1[] = "cadena1";
  char strin2[20];
  so_strcpy (strin1, strin2);
  printf("el string2 es %s", strin2);
  return 0;
}
