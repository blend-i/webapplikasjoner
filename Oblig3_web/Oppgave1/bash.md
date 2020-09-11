# Oppgave 1 Bash Cardio 

**1 - Lage mappe**

*  mkdir ny_mappe

**2 - Gå inn i mappen**

* cd ny_mappe/

**3 - Lage fil i mappen**

* touch nyFil.txt

**4 - Legge tekst til filen**

* echo  insert text here >> nyFil.txt

**4 - Endre den fra kommandolinjen**

sed -i 's/insert/changed/g' nyFil.txt>>nyFil.txt

Alternativt kan man også gjøre

vim nyFil.txt

da får man opp ett "grensesnitt" der man kan endre eller legge til tekst. Trykk esc :wq! etter man har gjort endringene 

**5 - Slette filen**
rm nyFil.txt 
hei