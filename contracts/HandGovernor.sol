// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import {IVotes} from "@openzeppelin/contracts/governance/utils/IVotes.sol";
import {Governor} from "@openzeppelin/contracts/governance/Governor.sol";
import {GovernorCountingSimple} from "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import {GovernorVotes} from "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import {GovernorVotesQuorumFraction} from "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";
import {GovernorTimelockControl} from "@openzeppelin/contracts/governance/extensions/GovernorTimelockControl.sol";
import {TimelockController} from "@openzeppelin/contracts/governance/TimelockController.sol";

contract HandGovernor is Governor, GovernorCountingSimple, GovernorVotes, GovernorVotesQuorumFraction, GovernorTimelockControl {
    constructor(IVotes _token, TimelockController _timelock)
        Governor("The Hand Governor")
        GovernorVotes(_token)
        GovernorVotesQuorumFraction(10) // quorum 10%
        GovernorTimelockControl(_timelock)
    {}
    function votingDelay() public pure override returns (uint256) { return 1; }
    function votingPeriod() public pure override returns (uint256) { return 45818; } // ~1 semaine
    function proposalThreshold() public pure override returns (uint256) { return 0; }
    function state(uint256 proposalId)
        public view override(Governor, GovernorTimelockControl) returns (ProposalState)
    { return super.state(proposalId); }
    function propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description)
        public override(Governor) returns (uint256)
    { return super.propose(targets, values, calldatas, description); }
    function _execute(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)
        internal override(Governor, GovernorTimelockControl)
    { super._execute(proposalId, targets, values, calldatas, descriptionHash); }
    function _cancel(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)
        internal override(Governor, GovernorTimelockControl)
        returns (uint256)
    { return super._cancel(targets, values, calldatas, descriptionHash); }
    function _executor() internal view override(Governor, GovernorTimelockControl) returns (address) {
        return super._executor();
    }
    function supportsInterface(bytes4 interfaceId)
        public view override(Governor, GovernorTimelockControl) returns (bool)
    { return super.supportsInterface(interfaceId); }
}

