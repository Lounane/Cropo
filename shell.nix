let
  pkgs = import <nixpkgs> { };
in
pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-18_x
    # pkgs.yarn
    pkgs.nodePackages.pnpm
    # pkgs.nodePackages.npm-check-updates
  ];
  shellHook =
    ''
      # echo "welcom to nix shell"
      # mkdir -p ../.nix-node
      # export NODE_PATH=$PWD/../.nix-node
      # export NPM_CONFIG_PREFIX=$PWD/../.nix-node
      # export PATH=$NODE_PATH/bin:$PATH
      # npm install -g pnpm npm-check-updates @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog cz-emoji
    '';
}
