What it is:

An Express app working with node.js and jade, which prints on a webpage (localhost:3000) all the car data that reside in the fabcar network

How to make it work from ground zero (I advice you to do it the way the tutorial does it first):

Download preriquisites: 
https://hyperledger-fabric.readthedocs.io/en/release-1.3/prereqs.html

Install Samples, Binaries and Docker Images: 
https://hyperledger-fabric.readthedocs.io/en/release-1.3/install.html

Install node-modules, launch the fabcar network with node option activated (./startFabric.sh node), enroll Admin, register User and you're done with the hyperledger-part (or not): 
https://hyperledger-fabric.readthedocs.io/en/release-1.3/write_first_app.html

Pull from this repository anywhere on your file system

From the root of this project go to the "Blockchain" directory and open in a text editor query.js. As you can (or will) see it's a lot similar to the query.js inside the fabcar directory of fabric-samples.
/!\ Now, you need to modify the relative path to the hfc-key-store of the fabcar network (which is created when you launch in your cli the command "node enrollAdmin") from this file, it's line 32 in the code. /!\

