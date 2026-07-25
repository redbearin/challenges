Create a function that takes a name of a chemical compound as a string and returns the molar mass of the compound. For this challenge only, required data is included below.

Data
H -> 1
B -> 10
O -> 16
S -> 32
N -> 14
Cl -> 35

Water = "H2 O"
BoricAcid = "H3 B O3"
SulfuricAcid = "H2 S O4"
NitricAcid = "H N O3"
HydroChloricAcid = "H Cl"
Examples
molarMass("SulfuricAcid") -> "H2 S O4"
#H * 2 + S * 1 +  O * 4 -----> 1 * 2 + 32 * 1 + 16 * 4 = 98

molarMass("Water") -> "H2 O"
#H * 2 +  O * 1 -----> 1 * 2 + 16 * 1 = 18
Notes
Input is a string and return value is number.
In the data, "O" is an English letter, not zero.
Check out the Resources tab.