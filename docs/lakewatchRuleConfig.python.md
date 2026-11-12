# `lakewatchRuleConfig` Submodule <a name="`lakewatchRuleConfig` Submodule" id="@cdktn/provider-databricks.lakewatchRuleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakewatchRuleConfigA <a name="LakewatchRuleConfigA" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config databricks_lakewatch_rule_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule_config

lakewatchRuleConfig.LakewatchRuleConfigA(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  default_folder: str = None,
  default_schedule: LakewatchRuleConfigDefaultSchedule = None,
  default_signal_collation_window: str = None,
  detection_categories: typing.List[str] = None,
  provider_config: LakewatchRuleConfigProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#parent LakewatchRuleConfigA#parent}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.defaultFolder">default_folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_folder LakewatchRuleConfigA#default_folder}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.defaultSchedule">default_schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule">LakewatchRuleConfigDefaultSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_schedule LakewatchRuleConfigA#default_schedule}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.defaultSignalCollationWindow">default_signal_collation_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_signal_collation_window LakewatchRuleConfigA#default_signal_collation_window}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.detectionCategories">detection_categories</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#detection_categories LakewatchRuleConfigA#detection_categories}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig">LakewatchRuleConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#provider_config LakewatchRuleConfigA#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#parent LakewatchRuleConfigA#parent}.

---

##### `default_folder`<sup>Optional</sup> <a name="default_folder" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.defaultFolder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_folder LakewatchRuleConfigA#default_folder}.

---

##### `default_schedule`<sup>Optional</sup> <a name="default_schedule" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.defaultSchedule"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule">LakewatchRuleConfigDefaultSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_schedule LakewatchRuleConfigA#default_schedule}.

---

##### `default_signal_collation_window`<sup>Optional</sup> <a name="default_signal_collation_window" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.defaultSignalCollationWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_signal_collation_window LakewatchRuleConfigA#default_signal_collation_window}.

---

##### `detection_categories`<sup>Optional</sup> <a name="detection_categories" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.detectionCategories"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#detection_categories LakewatchRuleConfigA#detection_categories}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig">LakewatchRuleConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#provider_config LakewatchRuleConfigA#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.putDefaultSchedule">put_default_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetDefaultFolder">reset_default_folder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetDefaultSchedule">reset_default_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetDefaultSignalCollationWindow">reset_default_signal_collation_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetDetectionCategories">reset_detection_categories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_default_schedule` <a name="put_default_schedule" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.putDefaultSchedule"></a>

```python
def put_default_schedule(
  at_least_every: str = None,
  continuous: bool | IResolvable = None,
  cron_expression: str = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `at_least_every`<sup>Optional</sup> <a name="at_least_every" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.putDefaultSchedule.parameter.atLeastEvery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#at_least_every LakewatchRuleConfigA#at_least_every}.

---

###### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.putDefaultSchedule.parameter.continuous"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#continuous LakewatchRuleConfigA#continuous}.

---

###### `cron_expression`<sup>Optional</sup> <a name="cron_expression" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.putDefaultSchedule.parameter.cronExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#cron_expression LakewatchRuleConfigA#cron_expression}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.putDefaultSchedule.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#enabled LakewatchRuleConfigA#enabled}.

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#workspace_id LakewatchRuleConfigA#workspace_id}.

---

##### `reset_default_folder` <a name="reset_default_folder" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetDefaultFolder"></a>

```python
def reset_default_folder() -> None
```

##### `reset_default_schedule` <a name="reset_default_schedule" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetDefaultSchedule"></a>

```python
def reset_default_schedule() -> None
```

##### `reset_default_signal_collation_window` <a name="reset_default_signal_collation_window" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetDefaultSignalCollationWindow"></a>

```python
def reset_default_signal_collation_window() -> None
```

##### `reset_detection_categories` <a name="reset_detection_categories" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetDetectionCategories"></a>

```python
def reset_detection_categories() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LakewatchRuleConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isConstruct"></a>

```python
from cdktn_provider_databricks import lakewatch_rule_config

lakewatchRuleConfig.LakewatchRuleConfigA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isTerraformElement"></a>

```python
from cdktn_provider_databricks import lakewatch_rule_config

lakewatchRuleConfig.LakewatchRuleConfigA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isTerraformResource"></a>

```python
from cdktn_provider_databricks import lakewatch_rule_config

lakewatchRuleConfig.LakewatchRuleConfigA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import lakewatch_rule_config

lakewatchRuleConfig.LakewatchRuleConfigA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LakewatchRuleConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LakewatchRuleConfigA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LakewatchRuleConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LakewatchRuleConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultSchedule">default_schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference">LakewatchRuleConfigDefaultScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.effectiveDefaultFolder">effective_default_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.effectiveDetectionCategories">effective_detection_categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference">LakewatchRuleConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.updatedBy">updated_by</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference">LakewatchRuleConfigUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultFolderInput">default_folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultScheduleInput">default_schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule">LakewatchRuleConfigDefaultSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultSignalCollationWindowInput">default_signal_collation_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.detectionCategoriesInput">detection_categories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig">LakewatchRuleConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultFolder">default_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultSignalCollationWindow">default_signal_collation_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.detectionCategories">detection_categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_schedule`<sup>Required</sup> <a name="default_schedule" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultSchedule"></a>

```python
default_schedule: LakewatchRuleConfigDefaultScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference">LakewatchRuleConfigDefaultScheduleOutputReference</a>

---

##### `effective_default_folder`<sup>Required</sup> <a name="effective_default_folder" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.effectiveDefaultFolder"></a>

```python
effective_default_folder: str
```

- *Type:* str

---

##### `effective_detection_categories`<sup>Required</sup> <a name="effective_detection_categories" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.effectiveDetectionCategories"></a>

```python
effective_detection_categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.providerConfig"></a>

```python
provider_config: LakewatchRuleConfigProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference">LakewatchRuleConfigProviderConfigOutputReference</a>

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.updatedBy"></a>

```python
updated_by: LakewatchRuleConfigUpdatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference">LakewatchRuleConfigUpdatedByOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_folder_input`<sup>Optional</sup> <a name="default_folder_input" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultFolderInput"></a>

```python
default_folder_input: str
```

- *Type:* str

---

##### `default_schedule_input`<sup>Optional</sup> <a name="default_schedule_input" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultScheduleInput"></a>

```python
default_schedule_input: IResolvable | LakewatchRuleConfigDefaultSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule">LakewatchRuleConfigDefaultSchedule</a>

---

##### `default_signal_collation_window_input`<sup>Optional</sup> <a name="default_signal_collation_window_input" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultSignalCollationWindowInput"></a>

```python
default_signal_collation_window_input: str
```

- *Type:* str

---

##### `detection_categories_input`<sup>Optional</sup> <a name="detection_categories_input" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.detectionCategoriesInput"></a>

```python
detection_categories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | LakewatchRuleConfigProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig">LakewatchRuleConfigProviderConfig</a>

---

##### `default_folder`<sup>Required</sup> <a name="default_folder" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultFolder"></a>

```python
default_folder: str
```

- *Type:* str

---

##### `default_signal_collation_window`<sup>Required</sup> <a name="default_signal_collation_window" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultSignalCollationWindow"></a>

```python
default_signal_collation_window: str
```

- *Type:* str

---

##### `detection_categories`<sup>Required</sup> <a name="detection_categories" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.detectionCategories"></a>

```python
detection_categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LakewatchRuleConfigAConfig <a name="LakewatchRuleConfigAConfig" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule_config

lakewatchRuleConfig.LakewatchRuleConfigAConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  default_folder: str = None,
  default_schedule: LakewatchRuleConfigDefaultSchedule = None,
  default_signal_collation_window: str = None,
  detection_categories: typing.List[str] = None,
  provider_config: LakewatchRuleConfigProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#parent LakewatchRuleConfigA#parent}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.defaultFolder">default_folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_folder LakewatchRuleConfigA#default_folder}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.defaultSchedule">default_schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule">LakewatchRuleConfigDefaultSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_schedule LakewatchRuleConfigA#default_schedule}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.defaultSignalCollationWindow">default_signal_collation_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_signal_collation_window LakewatchRuleConfigA#default_signal_collation_window}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.detectionCategories">detection_categories</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#detection_categories LakewatchRuleConfigA#detection_categories}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig">LakewatchRuleConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#provider_config LakewatchRuleConfigA#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#parent LakewatchRuleConfigA#parent}.

---

##### `default_folder`<sup>Optional</sup> <a name="default_folder" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.defaultFolder"></a>

```python
default_folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_folder LakewatchRuleConfigA#default_folder}.

---

##### `default_schedule`<sup>Optional</sup> <a name="default_schedule" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.defaultSchedule"></a>

```python
default_schedule: LakewatchRuleConfigDefaultSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule">LakewatchRuleConfigDefaultSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_schedule LakewatchRuleConfigA#default_schedule}.

---

##### `default_signal_collation_window`<sup>Optional</sup> <a name="default_signal_collation_window" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.defaultSignalCollationWindow"></a>

```python
default_signal_collation_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_signal_collation_window LakewatchRuleConfigA#default_signal_collation_window}.

---

##### `detection_categories`<sup>Optional</sup> <a name="detection_categories" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.detectionCategories"></a>

```python
detection_categories: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#detection_categories LakewatchRuleConfigA#detection_categories}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.providerConfig"></a>

```python
provider_config: LakewatchRuleConfigProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig">LakewatchRuleConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#provider_config LakewatchRuleConfigA#provider_config}.

---

### LakewatchRuleConfigDefaultSchedule <a name="LakewatchRuleConfigDefaultSchedule" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule_config

lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule(
  at_least_every: str = None,
  continuous: bool | IResolvable = None,
  cron_expression: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.property.atLeastEvery">at_least_every</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#at_least_every LakewatchRuleConfigA#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.property.continuous">continuous</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#continuous LakewatchRuleConfigA#continuous}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#cron_expression LakewatchRuleConfigA#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#enabled LakewatchRuleConfigA#enabled}. |

---

##### `at_least_every`<sup>Optional</sup> <a name="at_least_every" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.property.atLeastEvery"></a>

```python
at_least_every: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#at_least_every LakewatchRuleConfigA#at_least_every}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.property.continuous"></a>

```python
continuous: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#continuous LakewatchRuleConfigA#continuous}.

---

##### `cron_expression`<sup>Optional</sup> <a name="cron_expression" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#cron_expression LakewatchRuleConfigA#cron_expression}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#enabled LakewatchRuleConfigA#enabled}.

---

### LakewatchRuleConfigProviderConfig <a name="LakewatchRuleConfigProviderConfig" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule_config

lakewatchRuleConfig.LakewatchRuleConfigProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#workspace_id LakewatchRuleConfigA#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#workspace_id LakewatchRuleConfigA#workspace_id}.

---

### LakewatchRuleConfigUpdatedBy <a name="LakewatchRuleConfigUpdatedBy" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule_config

lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#display_name LakewatchRuleConfigA#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#email LakewatchRuleConfigA#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#id LakewatchRuleConfigA#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#principal_type LakewatchRuleConfigA#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#display_name LakewatchRuleConfigA#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#email LakewatchRuleConfigA#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#id LakewatchRuleConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#principal_type LakewatchRuleConfigA#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakewatchRuleConfigDefaultScheduleOutputReference <a name="LakewatchRuleConfigDefaultScheduleOutputReference" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule_config

lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resetAtLeastEvery">reset_at_least_every</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resetContinuous">reset_continuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resetCronExpression">reset_cron_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_at_least_every` <a name="reset_at_least_every" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resetAtLeastEvery"></a>

```python
def reset_at_least_every() -> None
```

##### `reset_continuous` <a name="reset_continuous" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resetContinuous"></a>

```python
def reset_continuous() -> None
```

##### `reset_cron_expression` <a name="reset_cron_expression" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resetCronExpression"></a>

```python
def reset_cron_expression() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.atLeastEveryInput">at_least_every_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.continuousInput">continuous_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.atLeastEvery">at_least_every</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.continuous">continuous</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule">LakewatchRuleConfigDefaultSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `at_least_every_input`<sup>Optional</sup> <a name="at_least_every_input" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.atLeastEveryInput"></a>

```python
at_least_every_input: str
```

- *Type:* str

---

##### `continuous_input`<sup>Optional</sup> <a name="continuous_input" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.continuousInput"></a>

```python
continuous_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `at_least_every`<sup>Required</sup> <a name="at_least_every" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.atLeastEvery"></a>

```python
at_least_every: str
```

- *Type:* str

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.continuous"></a>

```python
continuous: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchRuleConfigDefaultSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule">LakewatchRuleConfigDefaultSchedule</a>

---


### LakewatchRuleConfigProviderConfigOutputReference <a name="LakewatchRuleConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule_config

lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig">LakewatchRuleConfigProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchRuleConfigProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig">LakewatchRuleConfigProviderConfig</a>

---


### LakewatchRuleConfigUpdatedByOutputReference <a name="LakewatchRuleConfigUpdatedByOutputReference" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_rule_config

lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy">LakewatchRuleConfigUpdatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.internalValue"></a>

```python
internal_value: LakewatchRuleConfigUpdatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy">LakewatchRuleConfigUpdatedBy</a>

---



