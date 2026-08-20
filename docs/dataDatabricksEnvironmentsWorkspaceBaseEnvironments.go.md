# `dataDatabricksEnvironmentsWorkspaceBaseEnvironments` Submodule <a name="`dataDatabricksEnvironmentsWorkspaceBaseEnvironments` Submodule" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironments <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments databricks_environments_workspace_base_environments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksenvironmentsworkspacebaseenvironments"

datadatabricksenvironmentsworkspacebaseenvironments.NewDataDatabricksEnvironmentsWorkspaceBaseEnvironments(scope Construct, id *string, config DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig) DataDatabricksEnvironmentsWorkspaceBaseEnvironments
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksEnvironmentsWorkspaceBaseEnvironments resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksenvironmentsworkspacebaseenvironments"

datadatabricksenvironmentsworkspacebaseenvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksenvironmentsworkspacebaseenvironments"

datadatabricksenvironmentsworkspacebaseenvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksenvironmentsworkspacebaseenvironments"

datadatabricksenvironmentsworkspacebaseenvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksenvironmentsworkspacebaseenvironments"

datadatabricksenvironmentsworkspacebaseenvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksEnvironmentsWorkspaceBaseEnvironments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksEnvironmentsWorkspaceBaseEnvironments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksEnvironmentsWorkspaceBaseEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksEnvironmentsWorkspaceBaseEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.workspaceBaseEnvironments">WorkspaceBaseEnvironments</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference</a>

---

##### `WorkspaceBaseEnvironments`<sup>Required</sup> <a name="WorkspaceBaseEnvironments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.workspaceBaseEnvironments"></a>

```go
func WorkspaceBaseEnvironments() DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksenvironmentsworkspacebaseenvironments"

&datadatabricksenvironmentsworkspacebaseenvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PageSize: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#page_size DataDatabricksEnvironmentsWorkspaceBaseEnvironments#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#page_size DataDatabricksEnvironmentsWorkspaceBaseEnvironments#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksenvironmentsworkspacebaseenvironments"

&datadatabricksenvironmentsworkspacebaseenvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksenvironmentsworkspacebaseenvironments"

&datadatabricksenvironmentsworkspacebaseenvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments {
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#name DataDatabricksEnvironmentsWorkspaceBaseEnvironments#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#name DataDatabricksEnvironmentsWorkspaceBaseEnvironments#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksenvironmentsworkspacebaseenvironments"

&datadatabricksenvironmentsworkspacebaseenvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksenvironmentsworkspacebaseenvironments"

&datadatabricksenvironmentsworkspacebaseenvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec {
	Dependencies: *[]*string,
	EnvironmentVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec.property.dependencies">Dependencies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#dependencies DataDatabricksEnvironmentsWorkspaceBaseEnvironments#dependencies}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec.property.environmentVersion">EnvironmentVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#environment_version DataDatabricksEnvironmentsWorkspaceBaseEnvironments#environment_version}. |

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec.property.dependencies"></a>

```go
Dependencies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#dependencies DataDatabricksEnvironmentsWorkspaceBaseEnvironments#dependencies}.

---

##### `EnvironmentVersion`<sup>Optional</sup> <a name="EnvironmentVersion" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec.property.environmentVersion"></a>

```go
EnvironmentVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/environments_workspace_base_environments#environment_version DataDatabricksEnvironmentsWorkspaceBaseEnvironments#environment_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksenvironmentsworkspacebaseenvironments"

datadatabricksenvironmentsworkspacebaseenvironments.NewDataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksenvironmentsworkspacebaseenvironments"

datadatabricksenvironmentsworkspacebaseenvironments.NewDataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.get"></a>

```go
func Get(index *f64) DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksenvironmentsworkspacebaseenvironments"

datadatabricksenvironmentsworkspacebaseenvironments.NewDataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.baseEnvironmentType">BaseEnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.creatorUserId">CreatorUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.effectiveBaseEnvironmentType">EffectiveBaseEnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.filepath">Filepath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.isDefault">IsDefault</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.lastUpdatedUserId">LastUpdatedUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseEnvironmentType`<sup>Required</sup> <a name="BaseEnvironmentType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.baseEnvironmentType"></a>

```go
func BaseEnvironmentType() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CreatorUserId`<sup>Required</sup> <a name="CreatorUserId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.creatorUserId"></a>

```go
func CreatorUserId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EffectiveBaseEnvironmentType`<sup>Required</sup> <a name="EffectiveBaseEnvironmentType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.effectiveBaseEnvironmentType"></a>

```go
func EffectiveBaseEnvironmentType() *string
```

- *Type:* *string

---

##### `Filepath`<sup>Required</sup> <a name="Filepath" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.filepath"></a>

```go
func Filepath() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LastUpdatedUserId`<sup>Required</sup> <a name="LastUpdatedUserId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.lastUpdatedUserId"></a>

```go
func LastUpdatedUserId() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.spec"></a>

```go
func Spec() DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments</a>

---


### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksenvironmentsworkspacebaseenvironments"

datadatabricksenvironmentsworkspacebaseenvironments.NewDataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksenvironmentsworkspacebaseenvironments"

datadatabricksenvironmentsworkspacebaseenvironments.NewDataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.resetDependencies">ResetDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.resetEnvironmentVersion">ResetEnvironmentVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDependencies` <a name="ResetDependencies" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.resetDependencies"></a>

```go
func ResetDependencies()
```

##### `ResetEnvironmentVersion` <a name="ResetEnvironmentVersion" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.resetEnvironmentVersion"></a>

```go
func ResetEnvironmentVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.dependenciesInput">DependenciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.environmentVersionInput">EnvironmentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.dependencies">Dependencies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.environmentVersion">EnvironmentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.dependenciesInput"></a>

```go
func DependenciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentVersionInput`<sup>Optional</sup> <a name="EnvironmentVersionInput" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.environmentVersionInput"></a>

```go
func EnvironmentVersionInput() *string
```

- *Type:* *string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.dependencies"></a>

```go
func Dependencies() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentVersion`<sup>Required</sup> <a name="EnvironmentVersion" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.environmentVersion"></a>

```go
func EnvironmentVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsSpec</a>

---



