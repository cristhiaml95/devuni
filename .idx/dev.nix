{ pkgs, ... }: {
  # (Opcional, pero recomendado) fija Node 20
  packages = [ pkgs.nodejs_20 ];

  idx.previews = {
    enable = true;
    previews = {
      web = {
        # OJO: --hostname en lugar de --host
        command = ["npm" "run" "dev" "--" "-p" "$PORT" "-H" "0.0.0.0"];
        manager = "web";
      };
    };
  };
}
