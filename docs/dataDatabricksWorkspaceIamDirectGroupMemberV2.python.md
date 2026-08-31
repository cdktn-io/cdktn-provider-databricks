# `dataDatabricksWorkspaceIamDirectGroupMemberV2` Submodule <a name="`dataDatabricksWorkspaceIamDirectGroupMemberV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceIamDirectGroupMemberV2 <a name="DataDatabricksWorkspaceIamDirectGroupMemberV2" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2 databricks_workspace_iam_direct_group_member_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_direct_group_member_v2

dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group_id: typing.Union[int, float],
  principal_id: typing.Union[int, float],
  provider_config: DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2#group_id DataDatabricksWorkspaceIamDirectGroupMemberV2#group_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.principalId">principal_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2#principal_id DataDatabricksWorkspaceIamDirectGroupMemberV2#principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig">DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2#provider_config DataDatabricksWorkspaceIamDirectGroupMemberV2#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.groupId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2#group_id DataDatabricksWorkspaceIamDirectGroupMemberV2#group_id}.

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.principalId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2#principal_id DataDatabricksWorkspaceIamDirectGroupMemberV2#principal_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig">DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2#provider_config DataDatabricksWorkspaceIamDirectGroupMemberV2#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2#workspace_id DataDatabricksWorkspaceIamDirectGroupMemberV2#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksWorkspaceIamDirectGroupMemberV2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_direct_group_member_v2

dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_direct_group_member_v2

dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_direct_group_member_v2

dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_direct_group_member_v2

dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksWorkspaceIamDirectGroupMemberV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksWorkspaceIamDirectGroupMemberV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksWorkspaceIamDirectGroupMemberV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceIamDirectGroupMemberV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.membershipSource">membership_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.principalIdInput">principal_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig">DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.principalId">principal_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `membership_source`<sup>Required</sup> <a name="membership_source" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.membershipSource"></a>

```python
membership_source: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.providerConfig"></a>

```python
provider_config: DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference</a>

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.principalIdInput"></a>

```python
principal_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig">DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig</a>

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.principalId"></a>

```python
principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceIamDirectGroupMemberV2Config <a name="DataDatabricksWorkspaceIamDirectGroupMemberV2Config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_direct_group_member_v2

dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group_id: typing.Union[int, float],
  principal_id: typing.Union[int, float],
  provider_config: DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2#group_id DataDatabricksWorkspaceIamDirectGroupMemberV2#group_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.principalId">principal_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2#principal_id DataDatabricksWorkspaceIamDirectGroupMemberV2#principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig">DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2#provider_config DataDatabricksWorkspaceIamDirectGroupMemberV2#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2#group_id DataDatabricksWorkspaceIamDirectGroupMemberV2#group_id}.

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.principalId"></a>

```python
principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2#principal_id DataDatabricksWorkspaceIamDirectGroupMemberV2#principal_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2Config.property.providerConfig"></a>

```python
provider_config: DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig">DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2#provider_config DataDatabricksWorkspaceIamDirectGroupMemberV2#provider_config}.

---

### DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig <a name="DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_direct_group_member_v2

dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2#workspace_id DataDatabricksWorkspaceIamDirectGroupMemberV2#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_direct_group_member_v2#workspace_id DataDatabricksWorkspaceIamDirectGroupMemberV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference <a name="DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_direct_group_member_v2

dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig">DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamDirectGroupMemberV2.DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig">DataDatabricksWorkspaceIamDirectGroupMemberV2ProviderConfig</a>

---



