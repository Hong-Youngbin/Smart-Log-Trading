// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract Payment {
  function ethPayment(address _address) public payable {
    (bool result, ) = _address.call{value:1,gas:30000}("");
    require(result, "Failed");
  }
}