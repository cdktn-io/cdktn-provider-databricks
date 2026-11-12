# `lakewatchRule` Submodule <a name="`lakewatchRule` Submodule" id="@cdktn/provider-databricks.lakewatchRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakewatchRule <a name="LakewatchRule" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule databricks_lakewatch_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_name: str,
  fidelity: str,
  output: LakewatchRuleOutput,
  rule_name: str,
  schedule: LakewatchRuleSchedule,
  schema_name: str,
  severity: str,
  annotations: typing.Mapping[str] = None,
  batch: LakewatchRuleBatch = None,
  category: str = None,
  content_resource_id: str = None,
  deduplication: str = None,
  deduplication_time_window: str = None,
  description: str = None,
  mitre: IResolvable | typing.List[LakewatchRuleMitre] = None,
  objective: str = None,
  provider_config: LakewatchRuleProviderConfig = None,
  references: typing.List[str] = None,
  run_as_principal: str = None,
  runbook: str = None,
  suppress_until_time: str = None,
  timerange: LakewatchRuleTimerange = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#catalog_name LakewatchRule#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.fidelity">fidelity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#fidelity LakewatchRule#fidelity}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.output">output</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#output LakewatchRule#output}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.ruleName">rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#rule_name LakewatchRule#rule_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schedule LakewatchRule#schedule}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schema_name LakewatchRule#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.severity">severity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#severity LakewatchRule#severity}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#annotations LakewatchRule#annotations}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.batch">batch</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#batch LakewatchRule#batch}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#category LakewatchRule#category}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.contentResourceId">content_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#content_resource_id LakewatchRule#content_resource_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.deduplication">deduplication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication LakewatchRule#deduplication}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.deduplicationTimeWindow">deduplication_time_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication_time_window LakewatchRule#deduplication_time_window}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#description LakewatchRule#description}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.mitre">mitre</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#mitre LakewatchRule#mitre}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.objective">objective</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#objective LakewatchRule#objective}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#provider_config LakewatchRule#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.references">references</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#references LakewatchRule#references}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.runAsPrincipal">run_as_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#run_as_principal LakewatchRule#run_as_principal}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.runbook">runbook</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#runbook LakewatchRule#runbook}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.suppressUntilTime">suppress_until_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#suppress_until_time LakewatchRule#suppress_until_time}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.timerange">timerange</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#timerange LakewatchRule#timerange}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#catalog_name LakewatchRule#catalog_name}.

---

##### `fidelity`<sup>Required</sup> <a name="fidelity" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.fidelity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#fidelity LakewatchRule#fidelity}.

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.output"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#output LakewatchRule#output}.

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.ruleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#rule_name LakewatchRule#rule_name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schedule LakewatchRule#schedule}.

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schema_name LakewatchRule#schema_name}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.severity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#severity LakewatchRule#severity}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#annotations LakewatchRule#annotations}.

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.batch"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#batch LakewatchRule#batch}.

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.category"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#category LakewatchRule#category}.

---

##### `content_resource_id`<sup>Optional</sup> <a name="content_resource_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.contentResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#content_resource_id LakewatchRule#content_resource_id}.

---

##### `deduplication`<sup>Optional</sup> <a name="deduplication" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.deduplication"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication LakewatchRule#deduplication}.

---

##### `deduplication_time_window`<sup>Optional</sup> <a name="deduplication_time_window" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.deduplicationTimeWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication_time_window LakewatchRule#deduplication_time_window}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#description LakewatchRule#description}.

---

##### `mitre`<sup>Optional</sup> <a name="mitre" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.mitre"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#mitre LakewatchRule#mitre}.

---

##### `objective`<sup>Optional</sup> <a name="objective" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.objective"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#objective LakewatchRule#objective}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#provider_config LakewatchRule#provider_config}.

---

##### `references`<sup>Optional</sup> <a name="references" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.references"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#references LakewatchRule#references}.

---

##### `run_as_principal`<sup>Optional</sup> <a name="run_as_principal" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.runAsPrincipal"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#run_as_principal LakewatchRule#run_as_principal}.

---

##### `runbook`<sup>Optional</sup> <a name="runbook" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.runbook"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#runbook LakewatchRule#runbook}.

---

##### `suppress_until_time`<sup>Optional</sup> <a name="suppress_until_time" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.suppressUntilTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#suppress_until_time LakewatchRule#suppress_until_time}.

---

##### `timerange`<sup>Optional</sup> <a name="timerange" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.timerange"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#timerange LakewatchRule#timerange}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putBatch">put_batch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putMitre">put_mitre</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putOutput">put_output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putTimerange">put_timerange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetBatch">reset_batch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetContentResourceId">reset_content_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetDeduplication">reset_deduplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetDeduplicationTimeWindow">reset_deduplication_time_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetMitre">reset_mitre</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetObjective">reset_objective</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetReferences">reset_references</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetRunAsPrincipal">reset_run_as_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetRunbook">reset_runbook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetSuppressUntilTime">reset_suppress_until_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetTimerange">reset_timerange</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_batch` <a name="put_batch" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putBatch"></a>

```python
def put_batch(
  custom: LakewatchRuleBatchCustom = None,
  sql: LakewatchRuleBatchSql = None,
  warehouse_id: str = None
) -> None
```

###### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putBatch.parameter.custom"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom">LakewatchRuleBatchCustom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#custom LakewatchRule#custom}.

---

###### `sql`<sup>Optional</sup> <a name="sql" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putBatch.parameter.sql"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql">LakewatchRuleBatchSql</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#sql LakewatchRule#sql}.

---

###### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putBatch.parameter.warehouseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#warehouse_id LakewatchRule#warehouse_id}.

---

##### `put_mitre` <a name="put_mitre" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putMitre"></a>

```python
def put_mitre(
  value: IResolvable | typing.List[LakewatchRuleMitre]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putMitre.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>]

---

##### `put_output` <a name="put_output" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putOutput"></a>

```python
def put_output(
  context: typing.Mapping[str] = None,
  default_context: bool | IResolvable = None,
  event_time_column: str = None,
  summary: str = None
) -> None
```

###### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putOutput.parameter.context"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#context LakewatchRule#context}.

---

###### `default_context`<sup>Optional</sup> <a name="default_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putOutput.parameter.defaultContext"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_context LakewatchRule#default_context}.

---

###### `event_time_column`<sup>Optional</sup> <a name="event_time_column" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putOutput.parameter.eventTimeColumn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#event_time_column LakewatchRule#event_time_column}.

---

###### `summary`<sup>Optional</sup> <a name="summary" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putOutput.parameter.summary"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#summary LakewatchRule#summary}.

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#workspace_id LakewatchRule#workspace_id}.

---

##### `put_schedule` <a name="put_schedule" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putSchedule"></a>

```python
def put_schedule(
  at_least_every: str = None,
  continuous: bool | IResolvable = None,
  cron_expression: str = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `at_least_every`<sup>Optional</sup> <a name="at_least_every" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putSchedule.parameter.atLeastEvery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#at_least_every LakewatchRule#at_least_every}.

---

###### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putSchedule.parameter.continuous"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#continuous LakewatchRule#continuous}.

---

###### `cron_expression`<sup>Optional</sup> <a name="cron_expression" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putSchedule.parameter.cronExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#cron_expression LakewatchRule#cron_expression}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putSchedule.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#enabled LakewatchRule#enabled}.

---

##### `put_timerange` <a name="put_timerange" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putTimerange"></a>

```python
def put_timerange(
  extend_lookback: str = None
) -> None
```

###### `extend_lookback`<sup>Optional</sup> <a name="extend_lookback" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putTimerange.parameter.extendLookback"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#extend_lookback LakewatchRule#extend_lookback}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_batch` <a name="reset_batch" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetBatch"></a>

```python
def reset_batch() -> None
```

##### `reset_category` <a name="reset_category" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_content_resource_id` <a name="reset_content_resource_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetContentResourceId"></a>

```python
def reset_content_resource_id() -> None
```

##### `reset_deduplication` <a name="reset_deduplication" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetDeduplication"></a>

```python
def reset_deduplication() -> None
```

##### `reset_deduplication_time_window` <a name="reset_deduplication_time_window" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetDeduplicationTimeWindow"></a>

```python
def reset_deduplication_time_window() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_mitre` <a name="reset_mitre" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetMitre"></a>

```python
def reset_mitre() -> None
```

##### `reset_objective` <a name="reset_objective" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetObjective"></a>

```python
def reset_objective() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_references` <a name="reset_references" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetReferences"></a>

```python
def reset_references() -> None
```

##### `reset_run_as_principal` <a name="reset_run_as_principal" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetRunAsPrincipal"></a>

```python
def reset_run_as_principal() -> None
```

##### `reset_runbook` <a name="reset_runbook" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetRunbook"></a>

```python
def reset_runbook() -> None
```

##### `reset_suppress_until_time` <a name="reset_suppress_until_time" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetSuppressUntilTime"></a>

```python
def reset_suppress_until_time() -> None
```

##### `reset_timerange` <a name="reset_timerange" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetTimerange"></a>

```python
def reset_timerange() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LakewatchRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isConstruct"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRule.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isTerraformElement"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isTerraformResource"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LakewatchRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LakewatchRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LakewatchRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LakewatchRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.batch">batch</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference">LakewatchRuleBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.computeWorkspaceId">compute_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.createdBy">created_by</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference">LakewatchRuleCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.effectiveCatalogName">effective_catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.effectiveRuleName">effective_rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.effectiveRunAsPrincipal">effective_run_as_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.effectiveSchemaName">effective_schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.mitre">mitre</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList">LakewatchRuleMitreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.originalContentPack">original_content_pack</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference">LakewatchRuleOriginalContentPackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.output">output</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference">LakewatchRuleOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.owner">owner</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference">LakewatchRuleOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference">LakewatchRuleProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference">LakewatchRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference">LakewatchRuleStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.timerange">timerange</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference">LakewatchRuleTimerangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.updatedBy">updated_by</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference">LakewatchRuleUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.batchInput">batch_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.contentResourceIdInput">content_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.deduplicationInput">deduplication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.deduplicationTimeWindowInput">deduplication_time_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.fidelityInput">fidelity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.mitreInput">mitre_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.objectiveInput">objective_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.outputInput">output_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.referencesInput">references_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.runAsPrincipalInput">run_as_principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.runbookInput">runbook_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.scheduleInput">schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.suppressUntilTimeInput">suppress_until_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.timerangeInput">timerange_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.contentResourceId">content_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.deduplication">deduplication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.deduplicationTimeWindow">deduplication_time_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.fidelity">fidelity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.objective">objective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.references">references</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.runAsPrincipal">run_as_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.runbook">runbook</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.suppressUntilTime">suppress_until_time</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `batch`<sup>Required</sup> <a name="batch" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.batch"></a>

```python
batch: LakewatchRuleBatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference">LakewatchRuleBatchOutputReference</a>

---

##### `compute_workspace_id`<sup>Required</sup> <a name="compute_workspace_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.computeWorkspaceId"></a>

```python
compute_workspace_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.createdBy"></a>

```python
created_by: LakewatchRuleCreatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference">LakewatchRuleCreatedByOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_catalog_name`<sup>Required</sup> <a name="effective_catalog_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.effectiveCatalogName"></a>

```python
effective_catalog_name: str
```

- *Type:* str

---

##### `effective_rule_name`<sup>Required</sup> <a name="effective_rule_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.effectiveRuleName"></a>

```python
effective_rule_name: str
```

- *Type:* str

---

##### `effective_run_as_principal`<sup>Required</sup> <a name="effective_run_as_principal" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.effectiveRunAsPrincipal"></a>

```python
effective_run_as_principal: str
```

- *Type:* str

---

##### `effective_schema_name`<sup>Required</sup> <a name="effective_schema_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.effectiveSchemaName"></a>

```python
effective_schema_name: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `mitre`<sup>Required</sup> <a name="mitre" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.mitre"></a>

```python
mitre: LakewatchRuleMitreList
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList">LakewatchRuleMitreList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `original_content_pack`<sup>Required</sup> <a name="original_content_pack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.originalContentPack"></a>

```python
original_content_pack: LakewatchRuleOriginalContentPackOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference">LakewatchRuleOriginalContentPackOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.output"></a>

```python
output: LakewatchRuleOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference">LakewatchRuleOutputOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.owner"></a>

```python
owner: LakewatchRuleOwnerOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference">LakewatchRuleOwnerOutputReference</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.providerConfig"></a>

```python
provider_config: LakewatchRuleProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference">LakewatchRuleProviderConfigOutputReference</a>

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.schedule"></a>

```python
schedule: LakewatchRuleScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference">LakewatchRuleScheduleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.status"></a>

```python
status: LakewatchRuleStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference">LakewatchRuleStatusOutputReference</a>

---

##### `timerange`<sup>Required</sup> <a name="timerange" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.timerange"></a>

```python
timerange: LakewatchRuleTimerangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference">LakewatchRuleTimerangeOutputReference</a>

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.updatedBy"></a>

```python
updated_by: LakewatchRuleUpdatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference">LakewatchRuleUpdatedByOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `batch_input`<sup>Optional</sup> <a name="batch_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.batchInput"></a>

```python
batch_input: IResolvable | LakewatchRuleBatch
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a>

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `content_resource_id_input`<sup>Optional</sup> <a name="content_resource_id_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.contentResourceIdInput"></a>

```python
content_resource_id_input: str
```

- *Type:* str

---

##### `deduplication_input`<sup>Optional</sup> <a name="deduplication_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.deduplicationInput"></a>

```python
deduplication_input: str
```

- *Type:* str

---

##### `deduplication_time_window_input`<sup>Optional</sup> <a name="deduplication_time_window_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.deduplicationTimeWindowInput"></a>

```python
deduplication_time_window_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `fidelity_input`<sup>Optional</sup> <a name="fidelity_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.fidelityInput"></a>

```python
fidelity_input: str
```

- *Type:* str

---

##### `mitre_input`<sup>Optional</sup> <a name="mitre_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.mitreInput"></a>

```python
mitre_input: IResolvable | typing.List[LakewatchRuleMitre]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>]

---

##### `objective_input`<sup>Optional</sup> <a name="objective_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.objectiveInput"></a>

```python
objective_input: str
```

- *Type:* str

---

##### `output_input`<sup>Optional</sup> <a name="output_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.outputInput"></a>

```python
output_input: IResolvable | LakewatchRuleOutput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a>

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | LakewatchRuleProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a>

---

##### `references_input`<sup>Optional</sup> <a name="references_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.referencesInput"></a>

```python
references_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `run_as_principal_input`<sup>Optional</sup> <a name="run_as_principal_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.runAsPrincipalInput"></a>

```python
run_as_principal_input: str
```

- *Type:* str

---

##### `runbook_input`<sup>Optional</sup> <a name="runbook_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.runbookInput"></a>

```python
runbook_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.scheduleInput"></a>

```python
schedule_input: IResolvable | LakewatchRuleSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a>

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `suppress_until_time_input`<sup>Optional</sup> <a name="suppress_until_time_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.suppressUntilTimeInput"></a>

```python
suppress_until_time_input: str
```

- *Type:* str

---

##### `timerange_input`<sup>Optional</sup> <a name="timerange_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.timerangeInput"></a>

```python
timerange_input: IResolvable | LakewatchRuleTimerange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `content_resource_id`<sup>Required</sup> <a name="content_resource_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.contentResourceId"></a>

```python
content_resource_id: str
```

- *Type:* str

---

##### `deduplication`<sup>Required</sup> <a name="deduplication" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.deduplication"></a>

```python
deduplication: str
```

- *Type:* str

---

##### `deduplication_time_window`<sup>Required</sup> <a name="deduplication_time_window" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.deduplicationTimeWindow"></a>

```python
deduplication_time_window: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fidelity`<sup>Required</sup> <a name="fidelity" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.fidelity"></a>

```python
fidelity: str
```

- *Type:* str

---

##### `objective`<sup>Required</sup> <a name="objective" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.objective"></a>

```python
objective: str
```

- *Type:* str

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.references"></a>

```python
references: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `run_as_principal`<sup>Required</sup> <a name="run_as_principal" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.runAsPrincipal"></a>

```python
run_as_principal: str
```

- *Type:* str

---

##### `runbook`<sup>Required</sup> <a name="runbook" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.runbook"></a>

```python
runbook: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `suppress_until_time`<sup>Required</sup> <a name="suppress_until_time" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.suppressUntilTime"></a>

```python
suppress_until_time: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LakewatchRuleBatch <a name="LakewatchRuleBatch" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleBatch(
  custom: LakewatchRuleBatchCustom = None,
  sql: LakewatchRuleBatchSql = None,
  warehouse_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom">LakewatchRuleBatchCustom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#custom LakewatchRule#custom}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch.property.sql">sql</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql">LakewatchRuleBatchSql</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#sql LakewatchRule#sql}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch.property.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#warehouse_id LakewatchRule#warehouse_id}. |

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch.property.custom"></a>

```python
custom: LakewatchRuleBatchCustom
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom">LakewatchRuleBatchCustom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#custom LakewatchRule#custom}.

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch.property.sql"></a>

```python
sql: LakewatchRuleBatchSql
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql">LakewatchRuleBatchSql</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#sql LakewatchRule#sql}.

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#warehouse_id LakewatchRule#warehouse_id}.

---

### LakewatchRuleBatchCustom <a name="LakewatchRuleBatchCustom" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleBatchCustom(
  notebook: str,
  options: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom.property.notebook">notebook</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#notebook LakewatchRule#notebook}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#options LakewatchRule#options}. |

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom.property.notebook"></a>

```python
notebook: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#notebook LakewatchRule#notebook}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#options LakewatchRule#options}.

---

### LakewatchRuleBatchSql <a name="LakewatchRuleBatchSql" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleBatchSql(
  query: str,
  default_catalog_name: str = None,
  default_schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#query LakewatchRule#query}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql.property.defaultCatalogName">default_catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_catalog_name LakewatchRule#default_catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql.property.defaultSchemaName">default_schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_schema_name LakewatchRule#default_schema_name}. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#query LakewatchRule#query}.

---

##### `default_catalog_name`<sup>Optional</sup> <a name="default_catalog_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql.property.defaultCatalogName"></a>

```python
default_catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_catalog_name LakewatchRule#default_catalog_name}.

---

##### `default_schema_name`<sup>Optional</sup> <a name="default_schema_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql.property.defaultSchemaName"></a>

```python
default_schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_schema_name LakewatchRule#default_schema_name}.

---

### LakewatchRuleConfig <a name="LakewatchRuleConfig" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_name: str,
  fidelity: str,
  output: LakewatchRuleOutput,
  rule_name: str,
  schedule: LakewatchRuleSchedule,
  schema_name: str,
  severity: str,
  annotations: typing.Mapping[str] = None,
  batch: LakewatchRuleBatch = None,
  category: str = None,
  content_resource_id: str = None,
  deduplication: str = None,
  deduplication_time_window: str = None,
  description: str = None,
  mitre: IResolvable | typing.List[LakewatchRuleMitre] = None,
  objective: str = None,
  provider_config: LakewatchRuleProviderConfig = None,
  references: typing.List[str] = None,
  run_as_principal: str = None,
  runbook: str = None,
  suppress_until_time: str = None,
  timerange: LakewatchRuleTimerange = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#catalog_name LakewatchRule#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.fidelity">fidelity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#fidelity LakewatchRule#fidelity}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.output">output</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#output LakewatchRule#output}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.ruleName">rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#rule_name LakewatchRule#rule_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schedule LakewatchRule#schedule}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schema_name LakewatchRule#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.severity">severity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#severity LakewatchRule#severity}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#annotations LakewatchRule#annotations}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.batch">batch</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#batch LakewatchRule#batch}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#category LakewatchRule#category}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.contentResourceId">content_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#content_resource_id LakewatchRule#content_resource_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.deduplication">deduplication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication LakewatchRule#deduplication}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.deduplicationTimeWindow">deduplication_time_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication_time_window LakewatchRule#deduplication_time_window}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#description LakewatchRule#description}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.mitre">mitre</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#mitre LakewatchRule#mitre}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.objective">objective</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#objective LakewatchRule#objective}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#provider_config LakewatchRule#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.references">references</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#references LakewatchRule#references}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.runAsPrincipal">run_as_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#run_as_principal LakewatchRule#run_as_principal}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.runbook">runbook</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#runbook LakewatchRule#runbook}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.suppressUntilTime">suppress_until_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#suppress_until_time LakewatchRule#suppress_until_time}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.timerange">timerange</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#timerange LakewatchRule#timerange}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#catalog_name LakewatchRule#catalog_name}.

---

##### `fidelity`<sup>Required</sup> <a name="fidelity" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.fidelity"></a>

```python
fidelity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#fidelity LakewatchRule#fidelity}.

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.output"></a>

```python
output: LakewatchRuleOutput
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#output LakewatchRule#output}.

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#rule_name LakewatchRule#rule_name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.schedule"></a>

```python
schedule: LakewatchRuleSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schedule LakewatchRule#schedule}.

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schema_name LakewatchRule#schema_name}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#severity LakewatchRule#severity}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#annotations LakewatchRule#annotations}.

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.batch"></a>

```python
batch: LakewatchRuleBatch
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#batch LakewatchRule#batch}.

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#category LakewatchRule#category}.

---

##### `content_resource_id`<sup>Optional</sup> <a name="content_resource_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.contentResourceId"></a>

```python
content_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#content_resource_id LakewatchRule#content_resource_id}.

---

##### `deduplication`<sup>Optional</sup> <a name="deduplication" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.deduplication"></a>

```python
deduplication: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication LakewatchRule#deduplication}.

---

##### `deduplication_time_window`<sup>Optional</sup> <a name="deduplication_time_window" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.deduplicationTimeWindow"></a>

```python
deduplication_time_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication_time_window LakewatchRule#deduplication_time_window}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#description LakewatchRule#description}.

---

##### `mitre`<sup>Optional</sup> <a name="mitre" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.mitre"></a>

```python
mitre: IResolvable | typing.List[LakewatchRuleMitre]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#mitre LakewatchRule#mitre}.

---

##### `objective`<sup>Optional</sup> <a name="objective" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.objective"></a>

```python
objective: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#objective LakewatchRule#objective}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.providerConfig"></a>

```python
provider_config: LakewatchRuleProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#provider_config LakewatchRule#provider_config}.

---

##### `references`<sup>Optional</sup> <a name="references" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.references"></a>

```python
references: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#references LakewatchRule#references}.

---

##### `run_as_principal`<sup>Optional</sup> <a name="run_as_principal" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.runAsPrincipal"></a>

```python
run_as_principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#run_as_principal LakewatchRule#run_as_principal}.

---

##### `runbook`<sup>Optional</sup> <a name="runbook" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.runbook"></a>

```python
runbook: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#runbook LakewatchRule#runbook}.

---

##### `suppress_until_time`<sup>Optional</sup> <a name="suppress_until_time" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.suppressUntilTime"></a>

```python
suppress_until_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#suppress_until_time LakewatchRule#suppress_until_time}.

---

##### `timerange`<sup>Optional</sup> <a name="timerange" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.timerange"></a>

```python
timerange: LakewatchRuleTimerange
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#timerange LakewatchRule#timerange}.

---

### LakewatchRuleCreatedBy <a name="LakewatchRuleCreatedBy" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleCreatedBy(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#display_name LakewatchRule#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#email LakewatchRule#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#id LakewatchRule#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#principal_type LakewatchRule#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#display_name LakewatchRule#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#email LakewatchRule#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#id LakewatchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#principal_type LakewatchRule#principal_type}.

---

### LakewatchRuleMitre <a name="LakewatchRuleMitre" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleMitre(
  sub_technique: str = None,
  sub_technique_id: str = None,
  tactic: str = None,
  taxonomy: str = None,
  technique: str = None,
  technique_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.subTechnique">sub_technique</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#sub_technique LakewatchRule#sub_technique}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.subTechniqueId">sub_technique_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#sub_technique_id LakewatchRule#sub_technique_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.tactic">tactic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#tactic LakewatchRule#tactic}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.taxonomy">taxonomy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#taxonomy LakewatchRule#taxonomy}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.technique">technique</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#technique LakewatchRule#technique}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.techniqueId">technique_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#technique_id LakewatchRule#technique_id}. |

---

##### `sub_technique`<sup>Optional</sup> <a name="sub_technique" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.subTechnique"></a>

```python
sub_technique: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#sub_technique LakewatchRule#sub_technique}.

---

##### `sub_technique_id`<sup>Optional</sup> <a name="sub_technique_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.subTechniqueId"></a>

```python
sub_technique_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#sub_technique_id LakewatchRule#sub_technique_id}.

---

##### `tactic`<sup>Optional</sup> <a name="tactic" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.tactic"></a>

```python
tactic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#tactic LakewatchRule#tactic}.

---

##### `taxonomy`<sup>Optional</sup> <a name="taxonomy" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.taxonomy"></a>

```python
taxonomy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#taxonomy LakewatchRule#taxonomy}.

---

##### `technique`<sup>Optional</sup> <a name="technique" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.technique"></a>

```python
technique: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#technique LakewatchRule#technique}.

---

##### `technique_id`<sup>Optional</sup> <a name="technique_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.techniqueId"></a>

```python
technique_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#technique_id LakewatchRule#technique_id}.

---

### LakewatchRuleOriginalContentPack <a name="LakewatchRuleOriginalContentPack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPack.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleOriginalContentPack()
```


### LakewatchRuleOutput <a name="LakewatchRuleOutput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleOutput(
  context: typing.Mapping[str] = None,
  default_context: bool | IResolvable = None,
  event_time_column: str = None,
  summary: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.property.context">context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#context LakewatchRule#context}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.property.defaultContext">default_context</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_context LakewatchRule#default_context}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.property.eventTimeColumn">event_time_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#event_time_column LakewatchRule#event_time_column}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.property.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#summary LakewatchRule#summary}. |

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.property.context"></a>

```python
context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#context LakewatchRule#context}.

---

##### `default_context`<sup>Optional</sup> <a name="default_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.property.defaultContext"></a>

```python
default_context: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_context LakewatchRule#default_context}.

---

##### `event_time_column`<sup>Optional</sup> <a name="event_time_column" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.property.eventTimeColumn"></a>

```python
event_time_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#event_time_column LakewatchRule#event_time_column}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.property.summary"></a>

```python
summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#summary LakewatchRule#summary}.

---

### LakewatchRuleOwner <a name="LakewatchRuleOwner" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleOwner(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#display_name LakewatchRule#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#email LakewatchRule#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#id LakewatchRule#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#principal_type LakewatchRule#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#display_name LakewatchRule#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#email LakewatchRule#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#id LakewatchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#principal_type LakewatchRule#principal_type}.

---

### LakewatchRuleProviderConfig <a name="LakewatchRuleProviderConfig" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#workspace_id LakewatchRule#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#workspace_id LakewatchRule#workspace_id}.

---

### LakewatchRuleSchedule <a name="LakewatchRuleSchedule" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleSchedule(
  at_least_every: str = None,
  continuous: bool | IResolvable = None,
  cron_expression: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.property.atLeastEvery">at_least_every</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#at_least_every LakewatchRule#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.property.continuous">continuous</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#continuous LakewatchRule#continuous}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#cron_expression LakewatchRule#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#enabled LakewatchRule#enabled}. |

---

##### `at_least_every`<sup>Optional</sup> <a name="at_least_every" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.property.atLeastEvery"></a>

```python
at_least_every: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#at_least_every LakewatchRule#at_least_every}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.property.continuous"></a>

```python
continuous: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#continuous LakewatchRule#continuous}.

---

##### `cron_expression`<sup>Optional</sup> <a name="cron_expression" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#cron_expression LakewatchRule#cron_expression}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#enabled LakewatchRule#enabled}.

---

### LakewatchRuleStatus <a name="LakewatchRuleStatus" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatus.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleStatus()
```


### LakewatchRuleTimerange <a name="LakewatchRuleTimerange" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleTimerange(
  extend_lookback: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange.property.extendLookback">extend_lookback</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#extend_lookback LakewatchRule#extend_lookback}. |

---

##### `extend_lookback`<sup>Optional</sup> <a name="extend_lookback" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange.property.extendLookback"></a>

```python
extend_lookback: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#extend_lookback LakewatchRule#extend_lookback}.

---

### LakewatchRuleUpdatedBy <a name="LakewatchRuleUpdatedBy" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleUpdatedBy(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#display_name LakewatchRule#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#email LakewatchRule#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#id LakewatchRule#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#principal_type LakewatchRule#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#display_name LakewatchRule#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#email LakewatchRule#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#id LakewatchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#principal_type LakewatchRule#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakewatchRuleBatchCustomOutputReference <a name="LakewatchRuleBatchCustomOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleBatchCustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.resetOptions">reset_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_options` <a name="reset_options" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.notebookInput">notebook_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.notebook">notebook</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom">LakewatchRuleBatchCustom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notebook_input`<sup>Optional</sup> <a name="notebook_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.notebookInput"></a>

```python
notebook_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.notebook"></a>

```python
notebook: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchRuleBatchCustom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom">LakewatchRuleBatchCustom</a>

---


### LakewatchRuleBatchOutputReference <a name="LakewatchRuleBatchOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.putCustom">put_custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.putSql">put_sql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resetCustom">reset_custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resetSql">reset_sql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resetWarehouseId">reset_warehouse_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom` <a name="put_custom" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.putCustom"></a>

```python
def put_custom(
  notebook: str,
  options: typing.Mapping[str] = None
) -> None
```

###### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.putCustom.parameter.notebook"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#notebook LakewatchRule#notebook}.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.putCustom.parameter.options"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#options LakewatchRule#options}.

---

##### `put_sql` <a name="put_sql" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.putSql"></a>

```python
def put_sql(
  query: str,
  default_catalog_name: str = None,
  default_schema_name: str = None
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.putSql.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#query LakewatchRule#query}.

---

###### `default_catalog_name`<sup>Optional</sup> <a name="default_catalog_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.putSql.parameter.defaultCatalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_catalog_name LakewatchRule#default_catalog_name}.

---

###### `default_schema_name`<sup>Optional</sup> <a name="default_schema_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.putSql.parameter.defaultSchemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_schema_name LakewatchRule#default_schema_name}.

---

##### `reset_custom` <a name="reset_custom" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resetCustom"></a>

```python
def reset_custom() -> None
```

##### `reset_sql` <a name="reset_sql" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resetSql"></a>

```python
def reset_sql() -> None
```

##### `reset_warehouse_id` <a name="reset_warehouse_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resetWarehouseId"></a>

```python
def reset_warehouse_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference">LakewatchRuleBatchCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.sql">sql</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference">LakewatchRuleBatchSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.customInput">custom_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom">LakewatchRuleBatchCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.sqlInput">sql_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql">LakewatchRuleBatchSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.warehouseIdInput">warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.custom"></a>

```python
custom: LakewatchRuleBatchCustomOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference">LakewatchRuleBatchCustomOutputReference</a>

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.sql"></a>

```python
sql: LakewatchRuleBatchSqlOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference">LakewatchRuleBatchSqlOutputReference</a>

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.customInput"></a>

```python
custom_input: IResolvable | LakewatchRuleBatchCustom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom">LakewatchRuleBatchCustom</a>

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.sqlInput"></a>

```python
sql_input: IResolvable | LakewatchRuleBatchSql
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql">LakewatchRuleBatchSql</a>

---

##### `warehouse_id_input`<sup>Optional</sup> <a name="warehouse_id_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.warehouseIdInput"></a>

```python
warehouse_id_input: str
```

- *Type:* str

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchRuleBatch
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a>

---


### LakewatchRuleBatchSqlOutputReference <a name="LakewatchRuleBatchSqlOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleBatchSqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.resetDefaultCatalogName">reset_default_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.resetDefaultSchemaName">reset_default_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_catalog_name` <a name="reset_default_catalog_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.resetDefaultCatalogName"></a>

```python
def reset_default_catalog_name() -> None
```

##### `reset_default_schema_name` <a name="reset_default_schema_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.resetDefaultSchemaName"></a>

```python
def reset_default_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.defaultCatalogNameInput">default_catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.defaultSchemaNameInput">default_schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.defaultCatalogName">default_catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.defaultSchemaName">default_schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql">LakewatchRuleBatchSql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_catalog_name_input`<sup>Optional</sup> <a name="default_catalog_name_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.defaultCatalogNameInput"></a>

```python
default_catalog_name_input: str
```

- *Type:* str

---

##### `default_schema_name_input`<sup>Optional</sup> <a name="default_schema_name_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.defaultSchemaNameInput"></a>

```python
default_schema_name_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `default_catalog_name`<sup>Required</sup> <a name="default_catalog_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.defaultCatalogName"></a>

```python
default_catalog_name: str
```

- *Type:* str

---

##### `default_schema_name`<sup>Required</sup> <a name="default_schema_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.defaultSchemaName"></a>

```python
default_schema_name: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchRuleBatchSql
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql">LakewatchRuleBatchSql</a>

---


### LakewatchRuleCreatedByOutputReference <a name="LakewatchRuleCreatedByOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy">LakewatchRuleCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: LakewatchRuleCreatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy">LakewatchRuleCreatedBy</a>

---


### LakewatchRuleMitreList <a name="LakewatchRuleMitreList" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleMitreList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakewatchRuleMitreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LakewatchRuleMitre]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>]

---


### LakewatchRuleMitreOutputReference <a name="LakewatchRuleMitreOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleMitreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetSubTechnique">reset_sub_technique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetSubTechniqueId">reset_sub_technique_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetTactic">reset_tactic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetTaxonomy">reset_taxonomy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetTechnique">reset_technique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetTechniqueId">reset_technique_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sub_technique` <a name="reset_sub_technique" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetSubTechnique"></a>

```python
def reset_sub_technique() -> None
```

##### `reset_sub_technique_id` <a name="reset_sub_technique_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetSubTechniqueId"></a>

```python
def reset_sub_technique_id() -> None
```

##### `reset_tactic` <a name="reset_tactic" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetTactic"></a>

```python
def reset_tactic() -> None
```

##### `reset_taxonomy` <a name="reset_taxonomy" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetTaxonomy"></a>

```python
def reset_taxonomy() -> None
```

##### `reset_technique` <a name="reset_technique" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetTechnique"></a>

```python
def reset_technique() -> None
```

##### `reset_technique_id` <a name="reset_technique_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetTechniqueId"></a>

```python
def reset_technique_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.subTechniqueIdInput">sub_technique_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.subTechniqueInput">sub_technique_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.tacticInput">tactic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.taxonomyInput">taxonomy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.techniqueIdInput">technique_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.techniqueInput">technique_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.subTechnique">sub_technique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.subTechniqueId">sub_technique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.tactic">tactic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.taxonomy">taxonomy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.technique">technique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.techniqueId">technique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sub_technique_id_input`<sup>Optional</sup> <a name="sub_technique_id_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.subTechniqueIdInput"></a>

```python
sub_technique_id_input: str
```

- *Type:* str

---

##### `sub_technique_input`<sup>Optional</sup> <a name="sub_technique_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.subTechniqueInput"></a>

```python
sub_technique_input: str
```

- *Type:* str

---

##### `tactic_input`<sup>Optional</sup> <a name="tactic_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.tacticInput"></a>

```python
tactic_input: str
```

- *Type:* str

---

##### `taxonomy_input`<sup>Optional</sup> <a name="taxonomy_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.taxonomyInput"></a>

```python
taxonomy_input: str
```

- *Type:* str

---

##### `technique_id_input`<sup>Optional</sup> <a name="technique_id_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.techniqueIdInput"></a>

```python
technique_id_input: str
```

- *Type:* str

---

##### `technique_input`<sup>Optional</sup> <a name="technique_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.techniqueInput"></a>

```python
technique_input: str
```

- *Type:* str

---

##### `sub_technique`<sup>Required</sup> <a name="sub_technique" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.subTechnique"></a>

```python
sub_technique: str
```

- *Type:* str

---

##### `sub_technique_id`<sup>Required</sup> <a name="sub_technique_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.subTechniqueId"></a>

```python
sub_technique_id: str
```

- *Type:* str

---

##### `tactic`<sup>Required</sup> <a name="tactic" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.tactic"></a>

```python
tactic: str
```

- *Type:* str

---

##### `taxonomy`<sup>Required</sup> <a name="taxonomy" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.taxonomy"></a>

```python
taxonomy: str
```

- *Type:* str

---

##### `technique`<sup>Required</sup> <a name="technique" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.technique"></a>

```python
technique: str
```

- *Type:* str

---

##### `technique_id`<sup>Required</sup> <a name="technique_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.techniqueId"></a>

```python
technique_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchRuleMitre
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>

---


### LakewatchRuleOriginalContentPackOutputReference <a name="LakewatchRuleOriginalContentPackOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleOriginalContentPackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPack">LakewatchRuleOriginalContentPack</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.internalValue"></a>

```python
internal_value: LakewatchRuleOriginalContentPack
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPack">LakewatchRuleOriginalContentPack</a>

---


### LakewatchRuleOutputOutputReference <a name="LakewatchRuleOutputOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resetContext">reset_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resetDefaultContext">reset_default_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resetEventTimeColumn">reset_event_time_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resetSummary">reset_summary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_context` <a name="reset_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resetContext"></a>

```python
def reset_context() -> None
```

##### `reset_default_context` <a name="reset_default_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resetDefaultContext"></a>

```python
def reset_default_context() -> None
```

##### `reset_event_time_column` <a name="reset_event_time_column" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resetEventTimeColumn"></a>

```python
def reset_event_time_column() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resetSummary"></a>

```python
def reset_summary() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.contextInput">context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.defaultContextInput">default_context_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.eventTimeColumnInput">event_time_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.context">context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.defaultContext">default_context</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.eventTimeColumn">event_time_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.contextInput"></a>

```python
context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_context_input`<sup>Optional</sup> <a name="default_context_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.defaultContextInput"></a>

```python
default_context_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_time_column_input`<sup>Optional</sup> <a name="event_time_column_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.eventTimeColumnInput"></a>

```python
event_time_column_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.context"></a>

```python
context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_context`<sup>Required</sup> <a name="default_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.defaultContext"></a>

```python
default_context: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_time_column`<sup>Required</sup> <a name="event_time_column" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.eventTimeColumn"></a>

```python
event_time_column: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchRuleOutput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a>

---


### LakewatchRuleOwnerOutputReference <a name="LakewatchRuleOwnerOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleOwnerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner">LakewatchRuleOwner</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.internalValue"></a>

```python
internal_value: LakewatchRuleOwner
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner">LakewatchRuleOwner</a>

---


### LakewatchRuleProviderConfigOutputReference <a name="LakewatchRuleProviderConfigOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchRuleProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a>

---


### LakewatchRuleScheduleOutputReference <a name="LakewatchRuleScheduleOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resetAtLeastEvery">reset_at_least_every</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resetContinuous">reset_continuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resetCronExpression">reset_cron_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_at_least_every` <a name="reset_at_least_every" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resetAtLeastEvery"></a>

```python
def reset_at_least_every() -> None
```

##### `reset_continuous` <a name="reset_continuous" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resetContinuous"></a>

```python
def reset_continuous() -> None
```

##### `reset_cron_expression` <a name="reset_cron_expression" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resetCronExpression"></a>

```python
def reset_cron_expression() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.atLeastEveryInput">at_least_every_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.continuousInput">continuous_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.atLeastEvery">at_least_every</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.continuous">continuous</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `at_least_every_input`<sup>Optional</sup> <a name="at_least_every_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.atLeastEveryInput"></a>

```python
at_least_every_input: str
```

- *Type:* str

---

##### `continuous_input`<sup>Optional</sup> <a name="continuous_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.continuousInput"></a>

```python
continuous_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `at_least_every`<sup>Required</sup> <a name="at_least_every" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.atLeastEvery"></a>

```python
at_least_every: str
```

- *Type:* str

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.continuous"></a>

```python
continuous: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchRuleSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a>

---


### LakewatchRuleStatusOutputReference <a name="LakewatchRuleStatusOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lastCompleteTime">last_complete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lastErrorMessage">last_error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lastStartTime">last_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lastStatusChangeTime">last_status_change_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.runState">run_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatus">LakewatchRuleStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `last_complete_time`<sup>Required</sup> <a name="last_complete_time" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lastCompleteTime"></a>

```python
last_complete_time: str
```

- *Type:* str

---

##### `last_error_message`<sup>Required</sup> <a name="last_error_message" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lastErrorMessage"></a>

```python
last_error_message: str
```

- *Type:* str

---

##### `last_start_time`<sup>Required</sup> <a name="last_start_time" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lastStartTime"></a>

```python
last_start_time: str
```

- *Type:* str

---

##### `last_status_change_time`<sup>Required</sup> <a name="last_status_change_time" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lastStatusChangeTime"></a>

```python
last_status_change_time: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `run_state`<sup>Required</sup> <a name="run_state" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.runState"></a>

```python
run_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.internalValue"></a>

```python
internal_value: LakewatchRuleStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatus">LakewatchRuleStatus</a>

---


### LakewatchRuleTimerangeOutputReference <a name="LakewatchRuleTimerangeOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleTimerangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.resetExtendLookback">reset_extend_lookback</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_extend_lookback` <a name="reset_extend_lookback" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.resetExtendLookback"></a>

```python
def reset_extend_lookback() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.extendLookbackInput">extend_lookback_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.extendLookback">extend_lookback</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extend_lookback_input`<sup>Optional</sup> <a name="extend_lookback_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.extendLookbackInput"></a>

```python
extend_lookback_input: str
```

- *Type:* str

---

##### `extend_lookback`<sup>Required</sup> <a name="extend_lookback" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.extendLookback"></a>

```python
extend_lookback: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchRuleTimerange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a>

---


### LakewatchRuleUpdatedByOutputReference <a name="LakewatchRuleUpdatedByOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule

lakewatchRule.LakewatchRuleUpdatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy">LakewatchRuleUpdatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.internalValue"></a>

```python
internal_value: LakewatchRuleUpdatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy">LakewatchRuleUpdatedBy</a>

---



