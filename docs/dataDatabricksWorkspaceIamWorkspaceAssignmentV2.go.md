# `dataDatabricksWorkspaceIamWorkspaceAssignmentV2` Submodule <a name="`dataDatabricksWorkspaceIamWorkspaceAssignmentV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceIamWorkspaceAssignmentV2 <a name="DataDatabricksWorkspaceIamWorkspaceAssignmentV2" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignment_v2 databricks_workspace_iam_workspace_assignment_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamworkspaceassignmentv2"

datadatabricksworkspaceiamworkspaceassignmentv2.NewDataDatabricksWorkspaceIamWorkspaceAssignmentV2(scope Construct, id *string, config DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config) DataDatabricksWorkspaceIamWorkspaceAssignmentV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config">DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config">DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksWorkspaceIamWorkspaceAssignmentV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamworkspaceassignmentv2"

datadatabricksworkspaceiamworkspaceassignmentv2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamworkspaceassignmentv2"

datadatabricksworkspaceiamworkspaceassignmentv2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamworkspaceassignmentv2"

datadatabricksworkspaceiamworkspaceassignmentv2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamworkspaceassignmentv2"

datadatabricksworkspaceiamworkspaceassignmentv2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksWorkspaceIamWorkspaceAssignmentV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksWorkspaceIamWorkspaceAssignmentV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksWorkspaceIamWorkspaceAssignmentV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignment_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceIamWorkspaceAssignmentV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.effectiveEntitlements">EffectiveEntitlements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.entitlements">Entitlements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.workspaceId">WorkspaceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.principalIdInput">PrincipalIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.principalId">PrincipalId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `EffectiveEntitlements`<sup>Required</sup> <a name="EffectiveEntitlements" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.effectiveEntitlements"></a>

```go
func EffectiveEntitlements() *[]*string
```

- *Type:* *[]*string

---

##### `Entitlements`<sup>Required</sup> <a name="Entitlements" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.entitlements"></a>

```go
func Entitlements() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.workspaceId"></a>

```go
func WorkspaceId() *f64
```

- *Type:* *f64

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.principalIdInput"></a>

```go
func PrincipalIdInput() *f64
```

- *Type:* *f64

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.principalId"></a>

```go
func PrincipalId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config <a name="DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamworkspaceassignmentv2"

&datadatabricksworkspaceiamworkspaceassignmentv2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PrincipalId: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.principalId">PrincipalId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignment_v2#principal_id DataDatabricksWorkspaceIamWorkspaceAssignmentV2#principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignment_v2#provider_config DataDatabricksWorkspaceIamWorkspaceAssignmentV2#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.principalId"></a>

```go
PrincipalId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignment_v2#principal_id DataDatabricksWorkspaceIamWorkspaceAssignmentV2#principal_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2Config.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignment_v2#provider_config DataDatabricksWorkspaceIamWorkspaceAssignmentV2#provider_config}.

---

### DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfig <a name="DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamworkspaceassignmentv2"

&datadatabricksworkspaceiamworkspaceassignmentv2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignment_v2#workspace_id DataDatabricksWorkspaceIamWorkspaceAssignmentV2#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignment_v2#workspace_id DataDatabricksWorkspaceIamWorkspaceAssignmentV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference <a name="DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksworkspaceiamworkspaceassignmentv2"

datadatabricksworkspaceiamworkspaceassignmentv2.NewDataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentV2.DataDatabricksWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



