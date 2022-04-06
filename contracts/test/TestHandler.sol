// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "../handler/HandlerContext.sol";

contract TestHandler is HandlerContext {
    function dudududu() external view returns (address sender, address manager) {
        return (_msgSender(), _manager());
    }
}
