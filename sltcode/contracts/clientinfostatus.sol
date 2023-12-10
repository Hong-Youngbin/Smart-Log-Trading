// SPDX-License-Identifier : UNLICENSED

pragma solidity ^0.8.0;

contract ClientInfoStatus {
    event Information(string info);
    address private owner;

    //고객 상태와 기능
    enum ClientStatus {
        Neutral,
        OnArray,
        OffArray,
        Buyer,
        Seller,
        MakeContract,
        CheckContract
    }
    
    //고객 Status를 관리하는 mapping 생성
    mapping(address => ClientStatus) internal clientProcess;
    constructor() {
        clientProcess[msg.sender] = ClientStatus.Neutral;
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    //고객 정보를 담는 구조체
    struct ClientInfo {
        string clientName;
        string clientAddress;
        address clientWalletAddress;
        string clientRole;
    }

    //고객 정보를 저장하는 매핑 생성
    mapping(address => ClientInfo) private clientInfoMapping;

    //고객의 현재 Status를 확인
    function checkClientStatus() public view returns(ClientStatus) {
        return clientProcess[msg.sender];
    }

    //고객 정보가 기존 매핑에 존재하는지 확인
    function checkInfoOnMapping() public {
        // `clientInfoMapping` 매핑에 `_walletAddress` 키가 존재하는지 확인
        if (clientInfoMapping[msg.sender].clientWalletAddress != address(0)) {
            // `_walletAddress` 키가 존재하면 `clientProcess` 상태를 `OnArray`로 변경
            clientProcess[msg.sender] = ClientStatus.OnArray;
        } else {
            // `_walletAddress` 키가 존재하지 않으면 `clientProcess` 상태를 `OffArray`로 변경
            clientProcess[msg.sender] = ClientStatus.OffArray;
        }
    }

    //고객정보를 clientInfoMapping에 저장(이름, 거주지주소, 지갑주소, 역할)
    function addClientInfoMapping(string memory _name, string memory _clientAddress) payable public {
        clientInfoMapping[msg.sender] = ClientInfo({
            clientName : _name, 
            clientAddress : _clientAddress, 
            clientWalletAddress : msg.sender,
            clientRole : ""
        });
        clientProcess[msg.sender] = ClientStatus.OnArray;
        emit Information("Your customer information has saved");
    }

    //고객 정보 열람
    function getClientInfoMapping(address _key) public view returns(ClientInfo memory) {
        return clientInfoMapping[_key];
    }

    //특정 고객 정보 삭제
    function deleteClientInfoMapping(address _key) payable public {
        delete(clientInfoMapping[_key]);
    }

    //내 정보(이름) 변경
    function changeClientName(string memory _clientName) payable public {
        clientInfoMapping[msg.sender].clientName = _clientName;
    }

    //내 정보(주소) 변경
    function changeClientAddress(string memory _clientAddress) payable public {
        clientInfoMapping[msg.sender].clientAddress = _clientAddress;
    }

    //내 정보(역할) 변경
    function changeClientRole(string memory _clientRole) payable public {
        clientInfoMapping[msg.sender].clientRole = _clientRole;
    }
    
    //고객 역할 설정
    function setRole(string memory _role) payable public {
        require(clientProcess[msg.sender] == ClientStatus.OnArray);
        emit Information("Select your role(Buyer(3) or Seller(4))");
        if (keccak256(bytes(_role)) == keccak256(bytes("Buyer"))) {
            clientProcess[msg.sender] = ClientStatus.Buyer;
            clientInfoMapping[msg.sender].clientRole = "Buyer";
        } else if (keccak256(bytes(_role)) == keccak256(bytes("Seller"))) {
            clientProcess[msg.sender] = ClientStatus.Seller;
            clientInfoMapping[msg.sender].clientRole = "Seller";
        }
    }

    //고객 역할 확인
    function getRole(address _key) public view returns(string memory) {
        return clientInfoMapping[_key].clientRole;
    }
}