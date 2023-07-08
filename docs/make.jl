using Documenter

format = Documenter.HTML(assets=["assets/css/ai4e.css"])

SolarEnergy = map(file -> joinpath("RenewableEnergy", file), readdir(joinpath(@__DIR__, "src", "RenewableEnergy")))

makedocs(
    sitename="碳中和开源汇编",
    strict=[
             :doctest,
             :linkcheck,
             :parse_error,
             :example_block,
             # Other available options are
             # :autodocs_block, :cross_references, :docs_block, :eval_block, :example_block, :footnote, :meta_block, :missing_docs, :setup_block
    ],
    pages=[
        "Home" => "index.md",
        "RenewableEnergy" => SolarEnergy,
    ],
    format=format,
)


deploydocs(
    repo="git@github.com:ai4energy/awesome-carbon-neutrality.git";
    push_preview=true
    #    target = "../build",
)
