# `lakewatchAlertConfig` Submodule <a name="`lakewatchAlertConfig` Submodule" id="@cdktn/provider-databricks.lakewatchAlertConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakewatchAlertConfig <a name="LakewatchAlertConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config databricks_lakewatch_alert_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfig(
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
  default_security_alert_collation_window: str = None,
  default_system_alert_collation_window: str = None,
  provider_config: LakewatchAlertConfigProviderConfig = None,
  security_alert_export_config: LakewatchAlertConfigSecurityAlertExportConfig = None,
  system_alert_export_config: LakewatchAlertConfigSystemAlertExportConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#parent LakewatchAlertConfig#parent}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.defaultSecurityAlertCollationWindow">default_security_alert_collation_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_security_alert_collation_window LakewatchAlertConfig#default_security_alert_collation_window}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.defaultSystemAlertCollationWindow">default_system_alert_collation_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_system_alert_collation_window LakewatchAlertConfig#default_system_alert_collation_window}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#provider_config LakewatchAlertConfig#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.securityAlertExportConfig">security_alert_export_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#security_alert_export_config LakewatchAlertConfig#security_alert_export_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.systemAlertExportConfig">system_alert_export_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#system_alert_export_config LakewatchAlertConfig#system_alert_export_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#parent LakewatchAlertConfig#parent}.

---

##### `default_security_alert_collation_window`<sup>Optional</sup> <a name="default_security_alert_collation_window" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.defaultSecurityAlertCollationWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_security_alert_collation_window LakewatchAlertConfig#default_security_alert_collation_window}.

---

##### `default_system_alert_collation_window`<sup>Optional</sup> <a name="default_system_alert_collation_window" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.defaultSystemAlertCollationWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_system_alert_collation_window LakewatchAlertConfig#default_system_alert_collation_window}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#provider_config LakewatchAlertConfig#provider_config}.

---

##### `security_alert_export_config`<sup>Optional</sup> <a name="security_alert_export_config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.securityAlertExportConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#security_alert_export_config LakewatchAlertConfig#security_alert_export_config}.

---

##### `system_alert_export_config`<sup>Optional</sup> <a name="system_alert_export_config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.systemAlertExportConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#system_alert_export_config LakewatchAlertConfig#system_alert_export_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSecurityAlertExportConfig">put_security_alert_export_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSystemAlertExportConfig">put_system_alert_export_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetDefaultSecurityAlertCollationWindow">reset_default_security_alert_collation_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetDefaultSystemAlertCollationWindow">reset_default_system_alert_collation_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetSecurityAlertExportConfig">reset_security_alert_export_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetSystemAlertExportConfig">reset_system_alert_export_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}.

---

##### `put_security_alert_export_config` <a name="put_security_alert_export_config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSecurityAlertExportConfig"></a>

```python
def put_security_alert_export_config(
  enabled: bool | IResolvable = None,
  jira: LakewatchAlertConfigSecurityAlertExportConfigJira = None,
  service_now: LakewatchAlertConfigSecurityAlertExportConfigServiceNow = None,
  slack: LakewatchAlertConfigSecurityAlertExportConfigSlack = None,
  tines: LakewatchAlertConfigSecurityAlertExportConfigTines = None,
  webhook: LakewatchAlertConfigSecurityAlertExportConfigWebhook = None,
  workspace_id: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSecurityAlertExportConfig.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#enabled LakewatchAlertConfig#enabled}.

---

###### `jira`<sup>Optional</sup> <a name="jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSecurityAlertExportConfig.parameter.jira"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#jira LakewatchAlertConfig#jira}.

---

###### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSecurityAlertExportConfig.parameter.serviceNow"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#service_now LakewatchAlertConfig#service_now}.

---

###### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSecurityAlertExportConfig.parameter.slack"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#slack LakewatchAlertConfig#slack}.

---

###### `tines`<sup>Optional</sup> <a name="tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSecurityAlertExportConfig.parameter.tines"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#tines LakewatchAlertConfig#tines}.

---

###### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSecurityAlertExportConfig.parameter.webhook"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook LakewatchAlertConfig#webhook}.

---

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSecurityAlertExportConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}.

---

##### `put_system_alert_export_config` <a name="put_system_alert_export_config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSystemAlertExportConfig"></a>

```python
def put_system_alert_export_config(
  enabled: bool | IResolvable = None,
  jira: LakewatchAlertConfigSystemAlertExportConfigJira = None,
  service_now: LakewatchAlertConfigSystemAlertExportConfigServiceNow = None,
  slack: LakewatchAlertConfigSystemAlertExportConfigSlack = None,
  tines: LakewatchAlertConfigSystemAlertExportConfigTines = None,
  webhook: LakewatchAlertConfigSystemAlertExportConfigWebhook = None,
  workspace_id: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSystemAlertExportConfig.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#enabled LakewatchAlertConfig#enabled}.

---

###### `jira`<sup>Optional</sup> <a name="jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSystemAlertExportConfig.parameter.jira"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#jira LakewatchAlertConfig#jira}.

---

###### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSystemAlertExportConfig.parameter.serviceNow"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#service_now LakewatchAlertConfig#service_now}.

---

###### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSystemAlertExportConfig.parameter.slack"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#slack LakewatchAlertConfig#slack}.

---

###### `tines`<sup>Optional</sup> <a name="tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSystemAlertExportConfig.parameter.tines"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#tines LakewatchAlertConfig#tines}.

---

###### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSystemAlertExportConfig.parameter.webhook"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook LakewatchAlertConfig#webhook}.

---

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSystemAlertExportConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}.

---

##### `reset_default_security_alert_collation_window` <a name="reset_default_security_alert_collation_window" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetDefaultSecurityAlertCollationWindow"></a>

```python
def reset_default_security_alert_collation_window() -> None
```

##### `reset_default_system_alert_collation_window` <a name="reset_default_system_alert_collation_window" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetDefaultSystemAlertCollationWindow"></a>

```python
def reset_default_system_alert_collation_window() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_security_alert_export_config` <a name="reset_security_alert_export_config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetSecurityAlertExportConfig"></a>

```python
def reset_security_alert_export_config() -> None
```

##### `reset_system_alert_export_config` <a name="reset_system_alert_export_config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetSystemAlertExportConfig"></a>

```python
def reset_system_alert_export_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LakewatchAlertConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isConstruct"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformElement"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformResource"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LakewatchAlertConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LakewatchAlertConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LakewatchAlertConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LakewatchAlertConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.effectiveDefaultSecurityAlertCollationWindow">effective_default_security_alert_collation_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.effectiveDefaultSystemAlertCollationWindow">effective_default_system_alert_collation_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference">LakewatchAlertConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.securityAlertExportConfig">security_alert_export_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference">LakewatchAlertConfigSecurityAlertExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.systemAlertExportConfig">system_alert_export_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference">LakewatchAlertConfigSystemAlertExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.updatedBy">updated_by</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference">LakewatchAlertConfigUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSecurityAlertCollationWindowInput">default_security_alert_collation_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSystemAlertCollationWindowInput">default_system_alert_collation_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.securityAlertExportConfigInput">security_alert_export_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.systemAlertExportConfigInput">system_alert_export_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSecurityAlertCollationWindow">default_security_alert_collation_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSystemAlertCollationWindow">default_system_alert_collation_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `effective_default_security_alert_collation_window`<sup>Required</sup> <a name="effective_default_security_alert_collation_window" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.effectiveDefaultSecurityAlertCollationWindow"></a>

```python
effective_default_security_alert_collation_window: str
```

- *Type:* str

---

##### `effective_default_system_alert_collation_window`<sup>Required</sup> <a name="effective_default_system_alert_collation_window" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.effectiveDefaultSystemAlertCollationWindow"></a>

```python
effective_default_system_alert_collation_window: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.providerConfig"></a>

```python
provider_config: LakewatchAlertConfigProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference">LakewatchAlertConfigProviderConfigOutputReference</a>

---

##### `security_alert_export_config`<sup>Required</sup> <a name="security_alert_export_config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.securityAlertExportConfig"></a>

```python
security_alert_export_config: LakewatchAlertConfigSecurityAlertExportConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference">LakewatchAlertConfigSecurityAlertExportConfigOutputReference</a>

---

##### `system_alert_export_config`<sup>Required</sup> <a name="system_alert_export_config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.systemAlertExportConfig"></a>

```python
system_alert_export_config: LakewatchAlertConfigSystemAlertExportConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference">LakewatchAlertConfigSystemAlertExportConfigOutputReference</a>

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.updatedBy"></a>

```python
updated_by: LakewatchAlertConfigUpdatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference">LakewatchAlertConfigUpdatedByOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_security_alert_collation_window_input`<sup>Optional</sup> <a name="default_security_alert_collation_window_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSecurityAlertCollationWindowInput"></a>

```python
default_security_alert_collation_window_input: str
```

- *Type:* str

---

##### `default_system_alert_collation_window_input`<sup>Optional</sup> <a name="default_system_alert_collation_window_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSystemAlertCollationWindowInput"></a>

```python
default_system_alert_collation_window_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | LakewatchAlertConfigProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a>

---

##### `security_alert_export_config_input`<sup>Optional</sup> <a name="security_alert_export_config_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.securityAlertExportConfigInput"></a>

```python
security_alert_export_config_input: IResolvable | LakewatchAlertConfigSecurityAlertExportConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a>

---

##### `system_alert_export_config_input`<sup>Optional</sup> <a name="system_alert_export_config_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.systemAlertExportConfigInput"></a>

```python
system_alert_export_config_input: IResolvable | LakewatchAlertConfigSystemAlertExportConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a>

---

##### `default_security_alert_collation_window`<sup>Required</sup> <a name="default_security_alert_collation_window" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSecurityAlertCollationWindow"></a>

```python
default_security_alert_collation_window: str
```

- *Type:* str

---

##### `default_system_alert_collation_window`<sup>Required</sup> <a name="default_system_alert_collation_window" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSystemAlertCollationWindow"></a>

```python
default_system_alert_collation_window: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LakewatchAlertConfigConfig <a name="LakewatchAlertConfigConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  default_security_alert_collation_window: str = None,
  default_system_alert_collation_window: str = None,
  provider_config: LakewatchAlertConfigProviderConfig = None,
  security_alert_export_config: LakewatchAlertConfigSecurityAlertExportConfig = None,
  system_alert_export_config: LakewatchAlertConfigSystemAlertExportConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#parent LakewatchAlertConfig#parent}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.defaultSecurityAlertCollationWindow">default_security_alert_collation_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_security_alert_collation_window LakewatchAlertConfig#default_security_alert_collation_window}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.defaultSystemAlertCollationWindow">default_system_alert_collation_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_system_alert_collation_window LakewatchAlertConfig#default_system_alert_collation_window}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#provider_config LakewatchAlertConfig#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.securityAlertExportConfig">security_alert_export_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#security_alert_export_config LakewatchAlertConfig#security_alert_export_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.systemAlertExportConfig">system_alert_export_config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#system_alert_export_config LakewatchAlertConfig#system_alert_export_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#parent LakewatchAlertConfig#parent}.

---

##### `default_security_alert_collation_window`<sup>Optional</sup> <a name="default_security_alert_collation_window" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.defaultSecurityAlertCollationWindow"></a>

```python
default_security_alert_collation_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_security_alert_collation_window LakewatchAlertConfig#default_security_alert_collation_window}.

---

##### `default_system_alert_collation_window`<sup>Optional</sup> <a name="default_system_alert_collation_window" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.defaultSystemAlertCollationWindow"></a>

```python
default_system_alert_collation_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_system_alert_collation_window LakewatchAlertConfig#default_system_alert_collation_window}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.providerConfig"></a>

```python
provider_config: LakewatchAlertConfigProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#provider_config LakewatchAlertConfig#provider_config}.

---

##### `security_alert_export_config`<sup>Optional</sup> <a name="security_alert_export_config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.securityAlertExportConfig"></a>

```python
security_alert_export_config: LakewatchAlertConfigSecurityAlertExportConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#security_alert_export_config LakewatchAlertConfig#security_alert_export_config}.

---

##### `system_alert_export_config`<sup>Optional</sup> <a name="system_alert_export_config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.systemAlertExportConfig"></a>

```python
system_alert_export_config: LakewatchAlertConfigSystemAlertExportConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#system_alert_export_config LakewatchAlertConfig#system_alert_export_config}.

---

### LakewatchAlertConfigProviderConfig <a name="LakewatchAlertConfigProviderConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}.

---

### LakewatchAlertConfigSecurityAlertExportConfig <a name="LakewatchAlertConfigSecurityAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig(
  enabled: bool | IResolvable = None,
  jira: LakewatchAlertConfigSecurityAlertExportConfigJira = None,
  service_now: LakewatchAlertConfigSecurityAlertExportConfigServiceNow = None,
  slack: LakewatchAlertConfigSecurityAlertExportConfigSlack = None,
  tines: LakewatchAlertConfigSecurityAlertExportConfigTines = None,
  webhook: LakewatchAlertConfigSecurityAlertExportConfigWebhook = None,
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#enabled LakewatchAlertConfig#enabled}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.jira">jira</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#jira LakewatchAlertConfig#jira}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#service_now LakewatchAlertConfig#service_now}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#slack LakewatchAlertConfig#slack}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.tines">tines</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#tines LakewatchAlertConfig#tines}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.webhook">webhook</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook LakewatchAlertConfig#webhook}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#enabled LakewatchAlertConfig#enabled}.

---

##### `jira`<sup>Optional</sup> <a name="jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.jira"></a>

```python
jira: LakewatchAlertConfigSecurityAlertExportConfigJira
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#jira LakewatchAlertConfig#jira}.

---

##### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.serviceNow"></a>

```python
service_now: LakewatchAlertConfigSecurityAlertExportConfigServiceNow
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#service_now LakewatchAlertConfig#service_now}.

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.slack"></a>

```python
slack: LakewatchAlertConfigSecurityAlertExportConfigSlack
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#slack LakewatchAlertConfig#slack}.

---

##### `tines`<sup>Optional</sup> <a name="tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.tines"></a>

```python
tines: LakewatchAlertConfigSecurityAlertExportConfigTines
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#tines LakewatchAlertConfig#tines}.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.webhook"></a>

```python
webhook: LakewatchAlertConfigSecurityAlertExportConfigWebhook
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook LakewatchAlertConfig#webhook}.

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}.

---

### LakewatchAlertConfigSecurityAlertExportConfigJira <a name="LakewatchAlertConfigSecurityAlertExportConfigJira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira(
  api_token_uc_secret: str,
  default_issue_type: str,
  instance_url: str,
  project_key: str,
  user_email: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.apiTokenUcSecret">api_token_uc_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#api_token_uc_secret LakewatchAlertConfig#api_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.defaultIssueType">default_issue_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_issue_type LakewatchAlertConfig#default_issue_type}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.instanceUrl">instance_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_url LakewatchAlertConfig#instance_url}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.projectKey">project_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#project_key LakewatchAlertConfig#project_key}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.userEmail">user_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#user_email LakewatchAlertConfig#user_email}. |

---

##### `api_token_uc_secret`<sup>Required</sup> <a name="api_token_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.apiTokenUcSecret"></a>

```python
api_token_uc_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#api_token_uc_secret LakewatchAlertConfig#api_token_uc_secret}.

---

##### `default_issue_type`<sup>Required</sup> <a name="default_issue_type" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.defaultIssueType"></a>

```python
default_issue_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_issue_type LakewatchAlertConfig#default_issue_type}.

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_url LakewatchAlertConfig#instance_url}.

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#project_key LakewatchAlertConfig#project_key}.

---

##### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#user_email LakewatchAlertConfig#user_email}.

---

### LakewatchAlertConfigSecurityAlertExportConfigServiceNow <a name="LakewatchAlertConfigSecurityAlertExportConfigServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow(
  client_id: str,
  client_secret_uc_secret: str,
  instance_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_id LakewatchAlertConfig#client_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientSecretUcSecret">client_secret_uc_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_secret_uc_secret LakewatchAlertConfig#client_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_id LakewatchAlertConfig#instance_id}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_id LakewatchAlertConfig#client_id}.

---

##### `client_secret_uc_secret`<sup>Required</sup> <a name="client_secret_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientSecretUcSecret"></a>

```python
client_secret_uc_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_secret_uc_secret LakewatchAlertConfig#client_secret_uc_secret}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_id LakewatchAlertConfig#instance_id}.

---

### LakewatchAlertConfigSecurityAlertExportConfigSlack <a name="LakewatchAlertConfigSecurityAlertExportConfigSlack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack(
  bot_token_uc_secret: str,
  channel: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack.property.botTokenUcSecret">bot_token_uc_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#bot_token_uc_secret LakewatchAlertConfig#bot_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack.property.channel">channel</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#channel LakewatchAlertConfig#channel}. |

---

##### `bot_token_uc_secret`<sup>Required</sup> <a name="bot_token_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack.property.botTokenUcSecret"></a>

```python
bot_token_uc_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#bot_token_uc_secret LakewatchAlertConfig#bot_token_uc_secret}.

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack.property.channel"></a>

```python
channel: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#channel LakewatchAlertConfig#channel}.

---

### LakewatchAlertConfigSecurityAlertExportConfigTines <a name="LakewatchAlertConfigSecurityAlertExportConfigTines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines(
  webhook_secret_uc_secret: str,
  webhook_uri: str,
  export_updates: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookSecretUcSecret">webhook_secret_uc_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_secret_uc_secret LakewatchAlertConfig#webhook_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookUri">webhook_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_uri LakewatchAlertConfig#webhook_uri}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.exportUpdates">export_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}. |

---

##### `webhook_secret_uc_secret`<sup>Required</sup> <a name="webhook_secret_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookSecretUcSecret"></a>

```python
webhook_secret_uc_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_secret_uc_secret LakewatchAlertConfig#webhook_secret_uc_secret}.

---

##### `webhook_uri`<sup>Required</sup> <a name="webhook_uri" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookUri"></a>

```python
webhook_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_uri LakewatchAlertConfig#webhook_uri}.

---

##### `export_updates`<sup>Optional</sup> <a name="export_updates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.exportUpdates"></a>

```python
export_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}.

---

### LakewatchAlertConfigSecurityAlertExportConfigWebhook <a name="LakewatchAlertConfigSecurityAlertExportConfigWebhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook(
  export_updates: bool | IResolvable = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook.property.exportUpdates">export_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#url LakewatchAlertConfig#url}. |

---

##### `export_updates`<sup>Optional</sup> <a name="export_updates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook.property.exportUpdates"></a>

```python
export_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#url LakewatchAlertConfig#url}.

---

### LakewatchAlertConfigSystemAlertExportConfig <a name="LakewatchAlertConfigSystemAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig(
  enabled: bool | IResolvable = None,
  jira: LakewatchAlertConfigSystemAlertExportConfigJira = None,
  service_now: LakewatchAlertConfigSystemAlertExportConfigServiceNow = None,
  slack: LakewatchAlertConfigSystemAlertExportConfigSlack = None,
  tines: LakewatchAlertConfigSystemAlertExportConfigTines = None,
  webhook: LakewatchAlertConfigSystemAlertExportConfigWebhook = None,
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#enabled LakewatchAlertConfig#enabled}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.jira">jira</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#jira LakewatchAlertConfig#jira}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#service_now LakewatchAlertConfig#service_now}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#slack LakewatchAlertConfig#slack}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.tines">tines</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#tines LakewatchAlertConfig#tines}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.webhook">webhook</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook LakewatchAlertConfig#webhook}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#enabled LakewatchAlertConfig#enabled}.

---

##### `jira`<sup>Optional</sup> <a name="jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.jira"></a>

```python
jira: LakewatchAlertConfigSystemAlertExportConfigJira
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#jira LakewatchAlertConfig#jira}.

---

##### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.serviceNow"></a>

```python
service_now: LakewatchAlertConfigSystemAlertExportConfigServiceNow
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#service_now LakewatchAlertConfig#service_now}.

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.slack"></a>

```python
slack: LakewatchAlertConfigSystemAlertExportConfigSlack
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#slack LakewatchAlertConfig#slack}.

---

##### `tines`<sup>Optional</sup> <a name="tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.tines"></a>

```python
tines: LakewatchAlertConfigSystemAlertExportConfigTines
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#tines LakewatchAlertConfig#tines}.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.webhook"></a>

```python
webhook: LakewatchAlertConfigSystemAlertExportConfigWebhook
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook LakewatchAlertConfig#webhook}.

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}.

---

### LakewatchAlertConfigSystemAlertExportConfigJira <a name="LakewatchAlertConfigSystemAlertExportConfigJira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira(
  api_token_uc_secret: str,
  default_issue_type: str,
  instance_url: str,
  project_key: str,
  user_email: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.apiTokenUcSecret">api_token_uc_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#api_token_uc_secret LakewatchAlertConfig#api_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.defaultIssueType">default_issue_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_issue_type LakewatchAlertConfig#default_issue_type}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.instanceUrl">instance_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_url LakewatchAlertConfig#instance_url}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.projectKey">project_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#project_key LakewatchAlertConfig#project_key}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.userEmail">user_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#user_email LakewatchAlertConfig#user_email}. |

---

##### `api_token_uc_secret`<sup>Required</sup> <a name="api_token_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.apiTokenUcSecret"></a>

```python
api_token_uc_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#api_token_uc_secret LakewatchAlertConfig#api_token_uc_secret}.

---

##### `default_issue_type`<sup>Required</sup> <a name="default_issue_type" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.defaultIssueType"></a>

```python
default_issue_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_issue_type LakewatchAlertConfig#default_issue_type}.

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_url LakewatchAlertConfig#instance_url}.

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#project_key LakewatchAlertConfig#project_key}.

---

##### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#user_email LakewatchAlertConfig#user_email}.

---

### LakewatchAlertConfigSystemAlertExportConfigServiceNow <a name="LakewatchAlertConfigSystemAlertExportConfigServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow(
  client_id: str,
  client_secret_uc_secret: str,
  instance_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_id LakewatchAlertConfig#client_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientSecretUcSecret">client_secret_uc_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_secret_uc_secret LakewatchAlertConfig#client_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_id LakewatchAlertConfig#instance_id}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_id LakewatchAlertConfig#client_id}.

---

##### `client_secret_uc_secret`<sup>Required</sup> <a name="client_secret_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientSecretUcSecret"></a>

```python
client_secret_uc_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_secret_uc_secret LakewatchAlertConfig#client_secret_uc_secret}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_id LakewatchAlertConfig#instance_id}.

---

### LakewatchAlertConfigSystemAlertExportConfigSlack <a name="LakewatchAlertConfigSystemAlertExportConfigSlack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack(
  bot_token_uc_secret: str,
  channel: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack.property.botTokenUcSecret">bot_token_uc_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#bot_token_uc_secret LakewatchAlertConfig#bot_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack.property.channel">channel</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#channel LakewatchAlertConfig#channel}. |

---

##### `bot_token_uc_secret`<sup>Required</sup> <a name="bot_token_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack.property.botTokenUcSecret"></a>

```python
bot_token_uc_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#bot_token_uc_secret LakewatchAlertConfig#bot_token_uc_secret}.

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack.property.channel"></a>

```python
channel: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#channel LakewatchAlertConfig#channel}.

---

### LakewatchAlertConfigSystemAlertExportConfigTines <a name="LakewatchAlertConfigSystemAlertExportConfigTines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines(
  webhook_secret_uc_secret: str,
  webhook_uri: str,
  export_updates: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.webhookSecretUcSecret">webhook_secret_uc_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_secret_uc_secret LakewatchAlertConfig#webhook_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.webhookUri">webhook_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_uri LakewatchAlertConfig#webhook_uri}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.exportUpdates">export_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}. |

---

##### `webhook_secret_uc_secret`<sup>Required</sup> <a name="webhook_secret_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.webhookSecretUcSecret"></a>

```python
webhook_secret_uc_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_secret_uc_secret LakewatchAlertConfig#webhook_secret_uc_secret}.

---

##### `webhook_uri`<sup>Required</sup> <a name="webhook_uri" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.webhookUri"></a>

```python
webhook_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_uri LakewatchAlertConfig#webhook_uri}.

---

##### `export_updates`<sup>Optional</sup> <a name="export_updates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.exportUpdates"></a>

```python
export_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}.

---

### LakewatchAlertConfigSystemAlertExportConfigWebhook <a name="LakewatchAlertConfigSystemAlertExportConfigWebhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook(
  export_updates: bool | IResolvable = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook.property.exportUpdates">export_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#url LakewatchAlertConfig#url}. |

---

##### `export_updates`<sup>Optional</sup> <a name="export_updates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook.property.exportUpdates"></a>

```python
export_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#url LakewatchAlertConfig#url}.

---

### LakewatchAlertConfigUpdatedBy <a name="LakewatchAlertConfigUpdatedBy" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#display_name LakewatchAlertConfig#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#email LakewatchAlertConfig#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#id LakewatchAlertConfig#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#principal_type LakewatchAlertConfig#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#display_name LakewatchAlertConfig#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#email LakewatchAlertConfig#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#id LakewatchAlertConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#principal_type LakewatchAlertConfig#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakewatchAlertConfigProviderConfigOutputReference <a name="LakewatchAlertConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchAlertConfigProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput">api_token_uc_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput">default_issue_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrlInput">instance_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKeyInput">project_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmailInput">user_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecret">api_token_uc_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueType">default_issue_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrl">instance_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKey">project_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmail">user_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_token_uc_secret_input`<sup>Optional</sup> <a name="api_token_uc_secret_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput"></a>

```python
api_token_uc_secret_input: str
```

- *Type:* str

---

##### `default_issue_type_input`<sup>Optional</sup> <a name="default_issue_type_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput"></a>

```python
default_issue_type_input: str
```

- *Type:* str

---

##### `instance_url_input`<sup>Optional</sup> <a name="instance_url_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrlInput"></a>

```python
instance_url_input: str
```

- *Type:* str

---

##### `project_key_input`<sup>Optional</sup> <a name="project_key_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKeyInput"></a>

```python
project_key_input: str
```

- *Type:* str

---

##### `user_email_input`<sup>Optional</sup> <a name="user_email_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmailInput"></a>

```python
user_email_input: str
```

- *Type:* str

---

##### `api_token_uc_secret`<sup>Required</sup> <a name="api_token_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecret"></a>

```python
api_token_uc_secret: str
```

- *Type:* str

---

##### `default_issue_type`<sup>Required</sup> <a name="default_issue_type" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueType"></a>

```python
default_issue_type: str
```

- *Type:* str

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

---

##### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigJira
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira">put_jira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow">put_service_now</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack">put_slack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines">put_tines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook">put_webhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetJira">reset_jira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetServiceNow">reset_service_now</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetSlack">reset_slack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetTines">reset_tines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWebhook">reset_webhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_jira` <a name="put_jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira"></a>

```python
def put_jira(
  api_token_uc_secret: str,
  default_issue_type: str,
  instance_url: str,
  project_key: str,
  user_email: str
) -> None
```

###### `api_token_uc_secret`<sup>Required</sup> <a name="api_token_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira.parameter.apiTokenUcSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#api_token_uc_secret LakewatchAlertConfig#api_token_uc_secret}.

---

###### `default_issue_type`<sup>Required</sup> <a name="default_issue_type" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira.parameter.defaultIssueType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_issue_type LakewatchAlertConfig#default_issue_type}.

---

###### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira.parameter.instanceUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_url LakewatchAlertConfig#instance_url}.

---

###### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira.parameter.projectKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#project_key LakewatchAlertConfig#project_key}.

---

###### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira.parameter.userEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#user_email LakewatchAlertConfig#user_email}.

---

##### `put_service_now` <a name="put_service_now" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow"></a>

```python
def put_service_now(
  client_id: str,
  client_secret_uc_secret: str,
  instance_id: str
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_id LakewatchAlertConfig#client_id}.

---

###### `client_secret_uc_secret`<sup>Required</sup> <a name="client_secret_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow.parameter.clientSecretUcSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_secret_uc_secret LakewatchAlertConfig#client_secret_uc_secret}.

---

###### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_id LakewatchAlertConfig#instance_id}.

---

##### `put_slack` <a name="put_slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack"></a>

```python
def put_slack(
  bot_token_uc_secret: str,
  channel: str
) -> None
```

###### `bot_token_uc_secret`<sup>Required</sup> <a name="bot_token_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack.parameter.botTokenUcSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#bot_token_uc_secret LakewatchAlertConfig#bot_token_uc_secret}.

---

###### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack.parameter.channel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#channel LakewatchAlertConfig#channel}.

---

##### `put_tines` <a name="put_tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines"></a>

```python
def put_tines(
  webhook_secret_uc_secret: str,
  webhook_uri: str,
  export_updates: bool | IResolvable = None
) -> None
```

###### `webhook_secret_uc_secret`<sup>Required</sup> <a name="webhook_secret_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines.parameter.webhookSecretUcSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_secret_uc_secret LakewatchAlertConfig#webhook_secret_uc_secret}.

---

###### `webhook_uri`<sup>Required</sup> <a name="webhook_uri" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines.parameter.webhookUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_uri LakewatchAlertConfig#webhook_uri}.

---

###### `export_updates`<sup>Optional</sup> <a name="export_updates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines.parameter.exportUpdates"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}.

---

##### `put_webhook` <a name="put_webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook"></a>

```python
def put_webhook(
  export_updates: bool | IResolvable = None,
  url: str = None
) -> None
```

###### `export_updates`<sup>Optional</sup> <a name="export_updates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook.parameter.exportUpdates"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}.

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#url LakewatchAlertConfig#url}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_jira` <a name="reset_jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetJira"></a>

```python
def reset_jira() -> None
```

##### `reset_service_now` <a name="reset_service_now" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetServiceNow"></a>

```python
def reset_service_now() -> None
```

##### `reset_slack` <a name="reset_slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetSlack"></a>

```python
def reset_slack() -> None
```

##### `reset_tines` <a name="reset_tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetTines"></a>

```python
def reset_tines() -> None
```

##### `reset_webhook` <a name="reset_webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWebhook"></a>

```python
def reset_webhook() -> None
```

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jira">jira</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference">LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference">LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference">LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tines">tines</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference">LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhook">webhook</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference">LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jiraInput">jira_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNowInput">service_now_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slackInput">slack_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tinesInput">tines_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhookInput">webhook_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jira`<sup>Required</sup> <a name="jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jira"></a>

```python
jira: LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference">LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference</a>

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNow"></a>

```python
service_now: LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference">LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slack"></a>

```python
slack: LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference">LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference</a>

---

##### `tines`<sup>Required</sup> <a name="tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tines"></a>

```python
tines: LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference">LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhook"></a>

```python
webhook: LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference">LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `jira_input`<sup>Optional</sup> <a name="jira_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jiraInput"></a>

```python
jira_input: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigJira
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a>

---

##### `service_now_input`<sup>Optional</sup> <a name="service_now_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNowInput"></a>

```python
service_now_input: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---

##### `slack_input`<sup>Optional</sup> <a name="slack_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slackInput"></a>

```python
slack_input: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigSlack
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---

##### `tines_input`<sup>Optional</sup> <a name="tines_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tinesInput"></a>

```python
tines_input: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigTines
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a>

---

##### `webhook_input`<sup>Optional</sup> <a name="webhook_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhookInput"></a>

```python
webhook_input: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigWebhook
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchAlertConfigSecurityAlertExportConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput">client_secret_uc_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret">client_secret_uc_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_uc_secret_input`<sup>Optional</sup> <a name="client_secret_uc_secret_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput"></a>

```python
client_secret_uc_secret_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret_uc_secret`<sup>Required</sup> <a name="client_secret_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret"></a>

```python
client_secret_uc_secret: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput">bot_token_uc_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecret">bot_token_uc_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bot_token_uc_secret_input`<sup>Optional</sup> <a name="bot_token_uc_secret_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput"></a>

```python
bot_token_uc_secret_input: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `bot_token_uc_secret`<sup>Required</sup> <a name="bot_token_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecret"></a>

```python
bot_token_uc_secret: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigSlack
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resetExportUpdates">reset_export_updates</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_export_updates` <a name="reset_export_updates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resetExportUpdates"></a>

```python
def reset_export_updates() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdatesInput">export_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput">webhook_secret_uc_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUriInput">webhook_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdates">export_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret">webhook_secret_uc_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUri">webhook_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_updates_input`<sup>Optional</sup> <a name="export_updates_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdatesInput"></a>

```python
export_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `webhook_secret_uc_secret_input`<sup>Optional</sup> <a name="webhook_secret_uc_secret_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput"></a>

```python
webhook_secret_uc_secret_input: str
```

- *Type:* str

---

##### `webhook_uri_input`<sup>Optional</sup> <a name="webhook_uri_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUriInput"></a>

```python
webhook_uri_input: str
```

- *Type:* str

---

##### `export_updates`<sup>Required</sup> <a name="export_updates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdates"></a>

```python
export_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `webhook_secret_uc_secret`<sup>Required</sup> <a name="webhook_secret_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret"></a>

```python
webhook_secret_uc_secret: str
```

- *Type:* str

---

##### `webhook_uri`<sup>Required</sup> <a name="webhook_uri" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUri"></a>

```python
webhook_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigTines
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetExportUpdates">reset_export_updates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_export_updates` <a name="reset_export_updates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetExportUpdates"></a>

```python
def reset_export_updates() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdatesInput">export_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdates">export_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_updates_input`<sup>Optional</sup> <a name="export_updates_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdatesInput"></a>

```python
export_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `export_updates`<sup>Required</sup> <a name="export_updates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdates"></a>

```python
export_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigWebhook
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---


### LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput">api_token_uc_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput">default_issue_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrlInput">instance_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKeyInput">project_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmailInput">user_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecret">api_token_uc_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueType">default_issue_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrl">instance_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKey">project_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmail">user_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_token_uc_secret_input`<sup>Optional</sup> <a name="api_token_uc_secret_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput"></a>

```python
api_token_uc_secret_input: str
```

- *Type:* str

---

##### `default_issue_type_input`<sup>Optional</sup> <a name="default_issue_type_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput"></a>

```python
default_issue_type_input: str
```

- *Type:* str

---

##### `instance_url_input`<sup>Optional</sup> <a name="instance_url_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrlInput"></a>

```python
instance_url_input: str
```

- *Type:* str

---

##### `project_key_input`<sup>Optional</sup> <a name="project_key_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKeyInput"></a>

```python
project_key_input: str
```

- *Type:* str

---

##### `user_email_input`<sup>Optional</sup> <a name="user_email_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmailInput"></a>

```python
user_email_input: str
```

- *Type:* str

---

##### `api_token_uc_secret`<sup>Required</sup> <a name="api_token_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecret"></a>

```python
api_token_uc_secret: str
```

- *Type:* str

---

##### `default_issue_type`<sup>Required</sup> <a name="default_issue_type" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueType"></a>

```python
default_issue_type: str
```

- *Type:* str

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

---

##### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchAlertConfigSystemAlertExportConfigJira
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a>

---


### LakewatchAlertConfigSystemAlertExportConfigOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira">put_jira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow">put_service_now</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack">put_slack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines">put_tines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook">put_webhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetJira">reset_jira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetServiceNow">reset_service_now</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetSlack">reset_slack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetTines">reset_tines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWebhook">reset_webhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_jira` <a name="put_jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira"></a>

```python
def put_jira(
  api_token_uc_secret: str,
  default_issue_type: str,
  instance_url: str,
  project_key: str,
  user_email: str
) -> None
```

###### `api_token_uc_secret`<sup>Required</sup> <a name="api_token_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira.parameter.apiTokenUcSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#api_token_uc_secret LakewatchAlertConfig#api_token_uc_secret}.

---

###### `default_issue_type`<sup>Required</sup> <a name="default_issue_type" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira.parameter.defaultIssueType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_issue_type LakewatchAlertConfig#default_issue_type}.

---

###### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira.parameter.instanceUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_url LakewatchAlertConfig#instance_url}.

---

###### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira.parameter.projectKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#project_key LakewatchAlertConfig#project_key}.

---

###### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira.parameter.userEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#user_email LakewatchAlertConfig#user_email}.

---

##### `put_service_now` <a name="put_service_now" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow"></a>

```python
def put_service_now(
  client_id: str,
  client_secret_uc_secret: str,
  instance_id: str
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_id LakewatchAlertConfig#client_id}.

---

###### `client_secret_uc_secret`<sup>Required</sup> <a name="client_secret_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow.parameter.clientSecretUcSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_secret_uc_secret LakewatchAlertConfig#client_secret_uc_secret}.

---

###### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_id LakewatchAlertConfig#instance_id}.

---

##### `put_slack` <a name="put_slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack"></a>

```python
def put_slack(
  bot_token_uc_secret: str,
  channel: str
) -> None
```

###### `bot_token_uc_secret`<sup>Required</sup> <a name="bot_token_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack.parameter.botTokenUcSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#bot_token_uc_secret LakewatchAlertConfig#bot_token_uc_secret}.

---

###### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack.parameter.channel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#channel LakewatchAlertConfig#channel}.

---

##### `put_tines` <a name="put_tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines"></a>

```python
def put_tines(
  webhook_secret_uc_secret: str,
  webhook_uri: str,
  export_updates: bool | IResolvable = None
) -> None
```

###### `webhook_secret_uc_secret`<sup>Required</sup> <a name="webhook_secret_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines.parameter.webhookSecretUcSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_secret_uc_secret LakewatchAlertConfig#webhook_secret_uc_secret}.

---

###### `webhook_uri`<sup>Required</sup> <a name="webhook_uri" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines.parameter.webhookUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_uri LakewatchAlertConfig#webhook_uri}.

---

###### `export_updates`<sup>Optional</sup> <a name="export_updates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines.parameter.exportUpdates"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}.

---

##### `put_webhook` <a name="put_webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook"></a>

```python
def put_webhook(
  export_updates: bool | IResolvable = None,
  url: str = None
) -> None
```

###### `export_updates`<sup>Optional</sup> <a name="export_updates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook.parameter.exportUpdates"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}.

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#url LakewatchAlertConfig#url}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_jira` <a name="reset_jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetJira"></a>

```python
def reset_jira() -> None
```

##### `reset_service_now` <a name="reset_service_now" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetServiceNow"></a>

```python
def reset_service_now() -> None
```

##### `reset_slack` <a name="reset_slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetSlack"></a>

```python
def reset_slack() -> None
```

##### `reset_tines` <a name="reset_tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetTines"></a>

```python
def reset_tines() -> None
```

##### `reset_webhook` <a name="reset_webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWebhook"></a>

```python
def reset_webhook() -> None
```

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jira">jira</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference">LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference">LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference">LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tines">tines</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference">LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhook">webhook</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference">LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jiraInput">jira_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNowInput">service_now_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slackInput">slack_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tinesInput">tines_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhookInput">webhook_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jira`<sup>Required</sup> <a name="jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jira"></a>

```python
jira: LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference">LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference</a>

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNow"></a>

```python
service_now: LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference">LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slack"></a>

```python
slack: LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference">LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference</a>

---

##### `tines`<sup>Required</sup> <a name="tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tines"></a>

```python
tines: LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference">LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhook"></a>

```python
webhook: LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference">LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `jira_input`<sup>Optional</sup> <a name="jira_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jiraInput"></a>

```python
jira_input: IResolvable | LakewatchAlertConfigSystemAlertExportConfigJira
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a>

---

##### `service_now_input`<sup>Optional</sup> <a name="service_now_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNowInput"></a>

```python
service_now_input: IResolvable | LakewatchAlertConfigSystemAlertExportConfigServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---

##### `slack_input`<sup>Optional</sup> <a name="slack_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slackInput"></a>

```python
slack_input: IResolvable | LakewatchAlertConfigSystemAlertExportConfigSlack
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a>

---

##### `tines_input`<sup>Optional</sup> <a name="tines_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tinesInput"></a>

```python
tines_input: IResolvable | LakewatchAlertConfigSystemAlertExportConfigTines
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a>

---

##### `webhook_input`<sup>Optional</sup> <a name="webhook_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhookInput"></a>

```python
webhook_input: IResolvable | LakewatchAlertConfigSystemAlertExportConfigWebhook
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchAlertConfigSystemAlertExportConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a>

---


### LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput">client_secret_uc_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret">client_secret_uc_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_uc_secret_input`<sup>Optional</sup> <a name="client_secret_uc_secret_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput"></a>

```python
client_secret_uc_secret_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret_uc_secret`<sup>Required</sup> <a name="client_secret_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret"></a>

```python
client_secret_uc_secret: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchAlertConfigSystemAlertExportConfigServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---


### LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput">bot_token_uc_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecret">bot_token_uc_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bot_token_uc_secret_input`<sup>Optional</sup> <a name="bot_token_uc_secret_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput"></a>

```python
bot_token_uc_secret_input: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `bot_token_uc_secret`<sup>Required</sup> <a name="bot_token_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecret"></a>

```python
bot_token_uc_secret: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchAlertConfigSystemAlertExportConfigSlack
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a>

---


### LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resetExportUpdates">reset_export_updates</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_export_updates` <a name="reset_export_updates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resetExportUpdates"></a>

```python
def reset_export_updates() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdatesInput">export_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput">webhook_secret_uc_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUriInput">webhook_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdates">export_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret">webhook_secret_uc_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUri">webhook_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_updates_input`<sup>Optional</sup> <a name="export_updates_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdatesInput"></a>

```python
export_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `webhook_secret_uc_secret_input`<sup>Optional</sup> <a name="webhook_secret_uc_secret_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput"></a>

```python
webhook_secret_uc_secret_input: str
```

- *Type:* str

---

##### `webhook_uri_input`<sup>Optional</sup> <a name="webhook_uri_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUriInput"></a>

```python
webhook_uri_input: str
```

- *Type:* str

---

##### `export_updates`<sup>Required</sup> <a name="export_updates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdates"></a>

```python
export_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `webhook_secret_uc_secret`<sup>Required</sup> <a name="webhook_secret_uc_secret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret"></a>

```python
webhook_secret_uc_secret: str
```

- *Type:* str

---

##### `webhook_uri`<sup>Required</sup> <a name="webhook_uri" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUri"></a>

```python
webhook_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchAlertConfigSystemAlertExportConfigTines
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a>

---


### LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetExportUpdates">reset_export_updates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_export_updates` <a name="reset_export_updates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetExportUpdates"></a>

```python
def reset_export_updates() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdatesInput">export_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdates">export_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_updates_input`<sup>Optional</sup> <a name="export_updates_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdatesInput"></a>

```python
export_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `export_updates`<sup>Required</sup> <a name="export_updates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdates"></a>

```python
export_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LakewatchAlertConfigSystemAlertExportConfigWebhook
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---


### LakewatchAlertConfigUpdatedByOutputReference <a name="LakewatchAlertConfigUpdatedByOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import lakewatch_alert_config

lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy">LakewatchAlertConfigUpdatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.internalValue"></a>

```python
internal_value: LakewatchAlertConfigUpdatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy">LakewatchAlertConfigUpdatedBy</a>

---



