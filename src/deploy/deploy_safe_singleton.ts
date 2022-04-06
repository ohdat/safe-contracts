import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  await deploy("GnosisSafe", {
    from: deployer,
    args: ["team"],
    log: true,
    // deterministicDeployment: true,
    // skipIfAlreadyDeployed: false,
  });

  await deploy("GnosisSafe", {
    from: deployer,
    args: ["community"],
    log: true,
    // deterministicDeployment: true,
    // skipIfAlreadyDeployed: false,
  });
};

deploy.tags = ["singleton", "main-suite"];
export default deploy;
