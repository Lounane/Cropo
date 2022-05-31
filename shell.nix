with (import <nixpkgs> { });
mkShell {
  buildInputs = [
    nodejs-16_x
    yarn
    # commitlint
    # commitizen
    # cz-conventional-changelog
    # cz-emoji

  ];
  shellHook = ''
    mkdir -p ../.nix-node
    export NODE_PATH=$PWD/../.nix-node
    export NPM_CONFIG_PREFIX=$PWD/../.nix-node
    export PATH=$NODE_PATH/bin:$PATH
    npm install -g pnpm npm-check-updates @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog cz-emoji
  '';
}

