# `mlflowWebhook` Submodule <a name="`mlflowWebhook` Submodule" id="@cdktn/provider-databricks.mlflowWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MlflowWebhook <a name="MlflowWebhook" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook databricks_mlflow_webhook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer"></a>

```python
from cdktn_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhook(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  events: typing.List[str],
  description: str = None,
  http_url_spec: MlflowWebhookHttpUrlSpec = None,
  id: str = None,
  job_spec: MlflowWebhookJobSpec = None,
  model_name: str = None,
  provider_config: MlflowWebhookProviderConfig = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.httpUrlSpec">http_url_spec</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | http_url_spec block. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.jobSpec">job_spec</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | job_spec block. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.modelName">model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfig">MlflowWebhookProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.events"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}.

---

##### `http_url_spec`<sup>Optional</sup> <a name="http_url_spec" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.httpUrlSpec"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

http_url_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#http_url_spec MlflowWebhook#http_url_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_spec`<sup>Optional</sup> <a name="job_spec" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.jobSpec"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

job_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#job_spec MlflowWebhook#job_spec}

---

##### `model_name`<sup>Optional</sup> <a name="model_name" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.modelName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfig">MlflowWebhookProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#provider_config MlflowWebhook#provider_config}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec">put_http_url_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec">put_job_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.resetHttpUrlSpec">reset_http_url_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.resetJobSpec">reset_job_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.resetModelName">reset_model_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_http_url_spec` <a name="put_http_url_spec" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec"></a>

```python
def put_http_url_spec(
  url: str,
  authorization: str = None,
  enable_ssl_verification: bool | IResolvable = None,
  secret: str = None
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#url MlflowWebhook#url}.

---

###### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#authorization MlflowWebhook#authorization}.

---

###### `enable_ssl_verification`<sup>Optional</sup> <a name="enable_ssl_verification" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec.parameter.enableSslVerification"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#enable_ssl_verification MlflowWebhook#enable_ssl_verification}.

---

###### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec.parameter.secret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#secret MlflowWebhook#secret}.

---

##### `put_job_spec` <a name="put_job_spec" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec"></a>

```python
def put_job_spec(
  access_token: str,
  job_id: str,
  workspace_url: str = None
) -> None
```

###### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec.parameter.accessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#access_token MlflowWebhook#access_token}.

---

###### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec.parameter.jobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#job_id MlflowWebhook#job_id}.

---

###### `workspace_url`<sup>Optional</sup> <a name="workspace_url" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec.parameter.workspaceUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#workspace_url MlflowWebhook#workspace_url}.

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#workspace_id MlflowWebhook#workspace_id}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_http_url_spec` <a name="reset_http_url_spec" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.resetHttpUrlSpec"></a>

```python
def reset_http_url_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_job_spec` <a name="reset_job_spec" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.resetJobSpec"></a>

```python
def reset_job_spec() -> None
```

##### `reset_model_name` <a name="reset_model_name" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.resetModelName"></a>

```python
def reset_model_name() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MlflowWebhook resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.isConstruct"></a>

```python
from cdktn_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformElement"></a>

```python
from cdktn_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformResource"></a>

```python
from cdktn_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MlflowWebhook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MlflowWebhook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MlflowWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MlflowWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpec">http_url_spec</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference">MlflowWebhookHttpUrlSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpec">job_spec</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference">MlflowWebhookJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference">MlflowWebhookProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpecInput">http_url_spec_input</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpecInput">job_spec_input</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelNameInput">model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.providerConfigInput">provider_config_input</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfig">MlflowWebhookProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `http_url_spec`<sup>Required</sup> <a name="http_url_spec" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpec"></a>

```python
http_url_spec: MlflowWebhookHttpUrlSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference">MlflowWebhookHttpUrlSpecOutputReference</a>

---

##### `job_spec`<sup>Required</sup> <a name="job_spec" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpec"></a>

```python
job_spec: MlflowWebhookJobSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference">MlflowWebhookJobSpecOutputReference</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.providerConfig"></a>

```python
provider_config: MlflowWebhookProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference">MlflowWebhookProviderConfigOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_url_spec_input`<sup>Optional</sup> <a name="http_url_spec_input" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpecInput"></a>

```python
http_url_spec_input: MlflowWebhookHttpUrlSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `job_spec_input`<sup>Optional</sup> <a name="job_spec_input" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpecInput"></a>

```python
job_spec_input: MlflowWebhookJobSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

---

##### `model_name_input`<sup>Optional</sup> <a name="model_name_input" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelNameInput"></a>

```python
model_name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.providerConfigInput"></a>

```python
provider_config_input: MlflowWebhookProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfig">MlflowWebhookProviderConfig</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MlflowWebhookConfig <a name="MlflowWebhookConfig" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.Initializer"></a>

```python
from cdktn_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhookConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  events: typing.List[str],
  description: str = None,
  http_url_spec: MlflowWebhookHttpUrlSpec = None,
  id: str = None,
  job_spec: MlflowWebhookJobSpec = None,
  model_name: str = None,
  provider_config: MlflowWebhookProviderConfig = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.httpUrlSpec">http_url_spec</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | http_url_spec block. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.jobSpec">job_spec</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | job_spec block. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.modelName">model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfig">MlflowWebhookProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}.

---

##### `http_url_spec`<sup>Optional</sup> <a name="http_url_spec" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.httpUrlSpec"></a>

```python
http_url_spec: MlflowWebhookHttpUrlSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

http_url_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#http_url_spec MlflowWebhook#http_url_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_spec`<sup>Optional</sup> <a name="job_spec" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.jobSpec"></a>

```python
job_spec: MlflowWebhookJobSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

job_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#job_spec MlflowWebhook#job_spec}

---

##### `model_name`<sup>Optional</sup> <a name="model_name" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.providerConfig"></a>

```python
provider_config: MlflowWebhookProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfig">MlflowWebhookProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#provider_config MlflowWebhook#provider_config}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}.

---

### MlflowWebhookHttpUrlSpec <a name="MlflowWebhookHttpUrlSpec" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.Initializer"></a>

```python
from cdktn_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhookHttpUrlSpec(
  url: str,
  authorization: str = None,
  enable_ssl_verification: bool | IResolvable = None,
  secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#url MlflowWebhook#url}. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#authorization MlflowWebhook#authorization}. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.enableSslVerification">enable_ssl_verification</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#enable_ssl_verification MlflowWebhook#enable_ssl_verification}. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.secret">secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#secret MlflowWebhook#secret}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#url MlflowWebhook#url}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#authorization MlflowWebhook#authorization}.

---

##### `enable_ssl_verification`<sup>Optional</sup> <a name="enable_ssl_verification" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.enableSslVerification"></a>

```python
enable_ssl_verification: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#enable_ssl_verification MlflowWebhook#enable_ssl_verification}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.secret"></a>

```python
secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#secret MlflowWebhook#secret}.

---

### MlflowWebhookJobSpec <a name="MlflowWebhookJobSpec" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.Initializer"></a>

```python
from cdktn_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhookJobSpec(
  access_token: str,
  job_id: str,
  workspace_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#access_token MlflowWebhook#access_token}. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.jobId">job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#job_id MlflowWebhook#job_id}. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.workspaceUrl">workspace_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#workspace_url MlflowWebhook#workspace_url}. |

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#access_token MlflowWebhook#access_token}.

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#job_id MlflowWebhook#job_id}.

---

##### `workspace_url`<sup>Optional</sup> <a name="workspace_url" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.workspaceUrl"></a>

```python
workspace_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#workspace_url MlflowWebhook#workspace_url}.

---

### MlflowWebhookProviderConfig <a name="MlflowWebhookProviderConfig" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhookProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#workspace_id MlflowWebhook#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/mlflow_webhook#workspace_id MlflowWebhook#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MlflowWebhookHttpUrlSpecOutputReference <a name="MlflowWebhookHttpUrlSpecOutputReference" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetEnableSslVerification">reset_enable_ssl_verification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetSecret">reset_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorization` <a name="reset_authorization" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_enable_ssl_verification` <a name="reset_enable_ssl_verification" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetEnableSslVerification"></a>

```python
def reset_enable_ssl_verification() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerificationInput">enable_ssl_verification_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerification">enable_ssl_verification</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `enable_ssl_verification_input`<sup>Optional</sup> <a name="enable_ssl_verification_input" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerificationInput"></a>

```python
enable_ssl_verification_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `enable_ssl_verification`<sup>Required</sup> <a name="enable_ssl_verification" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerification"></a>

```python
enable_ssl_verification: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.internalValue"></a>

```python
internal_value: MlflowWebhookHttpUrlSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

---


### MlflowWebhookJobSpecOutputReference <a name="MlflowWebhookJobSpecOutputReference" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhookJobSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resetWorkspaceUrl">reset_workspace_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_url` <a name="reset_workspace_url" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resetWorkspaceUrl"></a>

```python
def reset_workspace_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobIdInput">job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrlInput">workspace_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrl">workspace_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `job_id_input`<sup>Optional</sup> <a name="job_id_input" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobIdInput"></a>

```python
job_id_input: str
```

- *Type:* str

---

##### `workspace_url_input`<sup>Optional</sup> <a name="workspace_url_input" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrlInput"></a>

```python
workspace_url_input: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `workspace_url`<sup>Required</sup> <a name="workspace_url" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrl"></a>

```python
workspace_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.internalValue"></a>

```python
internal_value: MlflowWebhookJobSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

---


### MlflowWebhookProviderConfigOutputReference <a name="MlflowWebhookProviderConfigOutputReference" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhookProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfig">MlflowWebhookProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: MlflowWebhookProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.mlflowWebhook.MlflowWebhookProviderConfig">MlflowWebhookProviderConfig</a>

---



