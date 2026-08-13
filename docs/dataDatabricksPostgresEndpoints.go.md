# `dataDatabricksPostgresEndpoints` Submodule <a name="`dataDatabricksPostgresEndpoints` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresEndpoints <a name="DataDatabricksPostgresEndpoints" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints databricks_postgres_endpoints}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

datadatabrickspostgresendpoints.NewDataDatabricksPostgresEndpoints(scope Construct, id *string, config DataDatabricksPostgresEndpointsConfig) DataDatabricksPostgresEndpoints
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig">DataDatabricksPostgresEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig">DataDatabricksPostgresEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksPostgresEndpointsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig">DataDatabricksPostgresEndpointsProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresEndpoints resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

datadatabrickspostgresendpoints.DataDatabricksPostgresEndpoints_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

datadatabrickspostgresendpoints.DataDatabricksPostgresEndpoints_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

datadatabrickspostgresendpoints.DataDatabricksPostgresEndpoints_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

datadatabrickspostgresendpoints.DataDatabricksPostgresEndpoints_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksPostgresEndpoints resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksPostgresEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksPostgresEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList">DataDatabricksPostgresEndpointsEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference">DataDatabricksPostgresEndpointsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.endpoints"></a>

```go
func Endpoints() DataDatabricksPostgresEndpointsEndpointsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList">DataDatabricksPostgresEndpointsEndpointsList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksPostgresEndpointsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference">DataDatabricksPostgresEndpointsProviderConfigOutputReference</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpoints.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresEndpointsConfig <a name="DataDatabricksPostgresEndpointsConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

&datadatabrickspostgresendpoints.DataDatabricksPostgresEndpointsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
	PageSize: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#parent DataDatabricksPostgresEndpoints#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#page_size DataDatabricksPostgresEndpoints#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig">DataDatabricksPostgresEndpointsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#provider_config DataDatabricksPostgresEndpoints#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#parent DataDatabricksPostgresEndpoints#parent}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#page_size DataDatabricksPostgresEndpoints#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksPostgresEndpointsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig">DataDatabricksPostgresEndpointsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#provider_config DataDatabricksPostgresEndpoints#provider_config}.

---

### DataDatabricksPostgresEndpointsEndpoints <a name="DataDatabricksPostgresEndpointsEndpoints" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

&datadatabrickspostgresendpoints.DataDatabricksPostgresEndpointsEndpoints {
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#name DataDatabricksPostgresEndpoints#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig">DataDatabricksPostgresEndpointsEndpointsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#provider_config DataDatabricksPostgresEndpoints#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#name DataDatabricksPostgresEndpoints#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksPostgresEndpointsEndpointsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig">DataDatabricksPostgresEndpointsEndpointsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#provider_config DataDatabricksPostgresEndpoints#provider_config}.

---

### DataDatabricksPostgresEndpointsEndpointsProviderConfig <a name="DataDatabricksPostgresEndpointsEndpointsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

&datadatabrickspostgresendpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#workspace_id DataDatabricksPostgresEndpoints#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#workspace_id DataDatabricksPostgresEndpoints#workspace_id}.

---

### DataDatabricksPostgresEndpointsEndpointsSpec <a name="DataDatabricksPostgresEndpointsEndpointsSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

&datadatabrickspostgresendpoints.DataDatabricksPostgresEndpointsEndpointsSpec {
	EndpointType: *string,
	AutoscalingLimitMaxCu: *f64,
	AutoscalingLimitMinCu: *f64,
	Disabled: interface{},
	Group: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup,
	NoSuspension: interface{},
	Settings: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings,
	SuspendTimeoutDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.endpointType">EndpointType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#endpoint_type DataDatabricksPostgresEndpoints#endpoint_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#autoscaling_limit_max_cu DataDatabricksPostgresEndpoints#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#autoscaling_limit_min_cu DataDatabricksPostgresEndpoints#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.disabled">Disabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#disabled DataDatabricksPostgresEndpoints#disabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.group">Group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup">DataDatabricksPostgresEndpointsEndpointsSpecGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#group DataDatabricksPostgresEndpoints#group}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.noSuspension">NoSuspension</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#no_suspension DataDatabricksPostgresEndpoints#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings">DataDatabricksPostgresEndpointsEndpointsSpecSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#settings DataDatabricksPostgresEndpoints#settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#suspend_timeout_duration DataDatabricksPostgresEndpoints#suspend_timeout_duration}. |

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.endpointType"></a>

```go
EndpointType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#endpoint_type DataDatabricksPostgresEndpoints#endpoint_type}.

---

##### `AutoscalingLimitMaxCu`<sup>Optional</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.autoscalingLimitMaxCu"></a>

```go
AutoscalingLimitMaxCu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#autoscaling_limit_max_cu DataDatabricksPostgresEndpoints#autoscaling_limit_max_cu}.

---

##### `AutoscalingLimitMinCu`<sup>Optional</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.autoscalingLimitMinCu"></a>

```go
AutoscalingLimitMinCu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#autoscaling_limit_min_cu DataDatabricksPostgresEndpoints#autoscaling_limit_min_cu}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#disabled DataDatabricksPostgresEndpoints#disabled}.

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.group"></a>

```go
Group DataDatabricksPostgresEndpointsEndpointsSpecGroup
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup">DataDatabricksPostgresEndpointsEndpointsSpecGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#group DataDatabricksPostgresEndpoints#group}.

---

##### `NoSuspension`<sup>Optional</sup> <a name="NoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.noSuspension"></a>

```go
NoSuspension interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#no_suspension DataDatabricksPostgresEndpoints#no_suspension}.

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.settings"></a>

```go
Settings DataDatabricksPostgresEndpointsEndpointsSpecSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings">DataDatabricksPostgresEndpointsEndpointsSpecSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#settings DataDatabricksPostgresEndpoints#settings}.

---

##### `SuspendTimeoutDuration`<sup>Optional</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec.property.suspendTimeoutDuration"></a>

```go
SuspendTimeoutDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#suspend_timeout_duration DataDatabricksPostgresEndpoints#suspend_timeout_duration}.

---

### DataDatabricksPostgresEndpointsEndpointsSpecGroup <a name="DataDatabricksPostgresEndpointsEndpointsSpecGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

&datadatabrickspostgresendpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup {
	Max: *f64,
	Min: *f64,
	EnableReadableSecondaries: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#max DataDatabricksPostgresEndpoints#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#min DataDatabricksPostgresEndpoints#min}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#enable_readable_secondaries DataDatabricksPostgresEndpoints#enable_readable_secondaries}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#max DataDatabricksPostgresEndpoints#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#min DataDatabricksPostgresEndpoints#min}.

---

##### `EnableReadableSecondaries`<sup>Optional</sup> <a name="EnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup.property.enableReadableSecondaries"></a>

```go
EnableReadableSecondaries interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#enable_readable_secondaries DataDatabricksPostgresEndpoints#enable_readable_secondaries}.

---

### DataDatabricksPostgresEndpointsEndpointsSpecSettings <a name="DataDatabricksPostgresEndpointsEndpointsSpecSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

&datadatabrickspostgresendpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings {
	PgSettings: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings.property.pgSettings">PgSettings</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#pg_settings DataDatabricksPostgresEndpoints#pg_settings}. |

---

##### `PgSettings`<sup>Optional</sup> <a name="PgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings.property.pgSettings"></a>

```go
PgSettings *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#pg_settings DataDatabricksPostgresEndpoints#pg_settings}.

---

### DataDatabricksPostgresEndpointsEndpointsStatus <a name="DataDatabricksPostgresEndpointsEndpointsStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

&datadatabrickspostgresendpoints.DataDatabricksPostgresEndpointsEndpointsStatus {

}
```


### DataDatabricksPostgresEndpointsEndpointsStatusGroup <a name="DataDatabricksPostgresEndpointsEndpointsStatusGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

&datadatabrickspostgresendpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#max DataDatabricksPostgresEndpoints#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#min DataDatabricksPostgresEndpoints#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#max DataDatabricksPostgresEndpoints#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#min DataDatabricksPostgresEndpoints#min}.

---

### DataDatabricksPostgresEndpointsEndpointsStatusHosts <a name="DataDatabricksPostgresEndpointsEndpointsStatusHosts" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHosts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

&datadatabrickspostgresendpoints.DataDatabricksPostgresEndpointsEndpointsStatusHosts {

}
```


### DataDatabricksPostgresEndpointsEndpointsStatusSettings <a name="DataDatabricksPostgresEndpointsEndpointsStatusSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

&datadatabrickspostgresendpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettings {
	PgSettings: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettings.property.pgSettings">PgSettings</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#pg_settings DataDatabricksPostgresEndpoints#pg_settings}. |

---

##### `PgSettings`<sup>Optional</sup> <a name="PgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettings.property.pgSettings"></a>

```go
PgSettings *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#pg_settings DataDatabricksPostgresEndpoints#pg_settings}.

---

### DataDatabricksPostgresEndpointsProviderConfig <a name="DataDatabricksPostgresEndpointsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

&datadatabrickspostgresendpoints.DataDatabricksPostgresEndpointsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#workspace_id DataDatabricksPostgresEndpoints#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_endpoints#workspace_id DataDatabricksPostgresEndpoints#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresEndpointsEndpointsList <a name="DataDatabricksPostgresEndpointsEndpointsList" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

datadatabrickspostgresendpoints.NewDataDatabricksPostgresEndpointsEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPostgresEndpointsEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.get"></a>

```go
func Get(index *f64) DataDatabricksPostgresEndpointsEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresEndpointsEndpointsOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

datadatabrickspostgresendpoints.NewDataDatabricksPostgresEndpointsEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPostgresEndpointsEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksPostgresEndpointsEndpointsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfig">DataDatabricksPostgresEndpointsEndpointsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference">DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference">DataDatabricksPostgresEndpointsEndpointsSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference">DataDatabricksPostgresEndpointsEndpointsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints">DataDatabricksPostgresEndpointsEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference">DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.spec"></a>

```go
func Spec() DataDatabricksPostgresEndpointsEndpointsSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference">DataDatabricksPostgresEndpointsEndpointsSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.status"></a>

```go
func Status() DataDatabricksPostgresEndpointsEndpointsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference">DataDatabricksPostgresEndpointsEndpointsStatusOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresEndpointsEndpoints
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpoints">DataDatabricksPostgresEndpointsEndpoints</a>

---


### DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

datadatabrickspostgresendpoints.NewDataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

datadatabrickspostgresendpoints.NewDataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.resetEnableReadableSecondaries">ResetEnableReadableSecondaries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableReadableSecondaries` <a name="ResetEnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.resetEnableReadableSecondaries"></a>

```go
func ResetEnableReadableSecondaries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.enableReadableSecondariesInput">EnableReadableSecondariesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableReadableSecondariesInput`<sup>Optional</sup> <a name="EnableReadableSecondariesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.enableReadableSecondariesInput"></a>

```go
func EnableReadableSecondariesInput() interface{}
```

- *Type:* interface{}

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `EnableReadableSecondaries`<sup>Required</sup> <a name="EnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.enableReadableSecondaries"></a>

```go
func EnableReadableSecondaries() interface{}
```

- *Type:* interface{}

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresEndpointsEndpointsSpecOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

datadatabrickspostgresendpoints.NewDataDatabricksPostgresEndpointsEndpointsSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresEndpointsEndpointsSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.putGroup">PutGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetAutoscalingLimitMaxCu">ResetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetAutoscalingLimitMinCu">ResetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetNoSuspension">ResetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetSuspendTimeoutDuration">ResetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroup` <a name="PutGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.putGroup"></a>

```go
func PutGroup(value DataDatabricksPostgresEndpointsEndpointsSpecGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.putGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroup">DataDatabricksPostgresEndpointsEndpointsSpecGroup</a>

---

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.putSettings"></a>

```go
func PutSettings(value DataDatabricksPostgresEndpointsEndpointsSpecSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettings">DataDatabricksPostgresEndpointsEndpointsSpecSettings</a>

---

##### `ResetAutoscalingLimitMaxCu` <a name="ResetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetAutoscalingLimitMaxCu"></a>

```go
func ResetAutoscalingLimitMaxCu()
```

##### `ResetAutoscalingLimitMinCu` <a name="ResetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetAutoscalingLimitMinCu"></a>

```go
func ResetAutoscalingLimitMinCu()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetGroup"></a>

```go
func ResetGroup()
```

##### `ResetNoSuspension` <a name="ResetNoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetNoSuspension"></a>

```go
func ResetNoSuspension()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetSettings"></a>

```go
func ResetSettings()
```

##### `ResetSuspendTimeoutDuration` <a name="ResetSuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.resetSuspendTimeoutDuration"></a>

```go
func ResetSuspendTimeoutDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.group">Group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference">DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference">DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.autoscalingLimitMaxCuInput">AutoscalingLimitMaxCuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.autoscalingLimitMinCuInput">AutoscalingLimitMinCuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.groupInput">GroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.noSuspensionInput">NoSuspensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.settingsInput">SettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.suspendTimeoutDurationInput">SuspendTimeoutDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.noSuspension">NoSuspension</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec">DataDatabricksPostgresEndpointsEndpointsSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.group"></a>

```go
func Group() DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference">DataDatabricksPostgresEndpointsEndpointsSpecGroupOutputReference</a>

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.settings"></a>

```go
func Settings() DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference">DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference</a>

---

##### `AutoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="AutoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.autoscalingLimitMaxCuInput"></a>

```go
func AutoscalingLimitMaxCuInput() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCuInput`<sup>Optional</sup> <a name="AutoscalingLimitMinCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.autoscalingLimitMinCuInput"></a>

```go
func AutoscalingLimitMinCuInput() *f64
```

- *Type:* *f64

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.endpointTypeInput"></a>

```go
func EndpointTypeInput() *string
```

- *Type:* *string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.groupInput"></a>

```go
func GroupInput() interface{}
```

- *Type:* interface{}

---

##### `NoSuspensionInput`<sup>Optional</sup> <a name="NoSuspensionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.noSuspensionInput"></a>

```go
func NoSuspensionInput() interface{}
```

- *Type:* interface{}

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.settingsInput"></a>

```go
func SettingsInput() interface{}
```

- *Type:* interface{}

---

##### `SuspendTimeoutDurationInput`<sup>Optional</sup> <a name="SuspendTimeoutDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.suspendTimeoutDurationInput"></a>

```go
func SuspendTimeoutDurationInput() *string
```

- *Type:* *string

---

##### `AutoscalingLimitMaxCu`<sup>Required</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.autoscalingLimitMaxCu"></a>

```go
func AutoscalingLimitMaxCu() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCu`<sup>Required</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.autoscalingLimitMinCu"></a>

```go
func AutoscalingLimitMinCu() *f64
```

- *Type:* *f64

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `NoSuspension`<sup>Required</sup> <a name="NoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.noSuspension"></a>

```go
func NoSuspension() interface{}
```

- *Type:* interface{}

---

##### `SuspendTimeoutDuration`<sup>Required</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.suspendTimeoutDuration"></a>

```go
func SuspendTimeoutDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresEndpointsEndpointsSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpec">DataDatabricksPostgresEndpointsEndpointsSpec</a>

---


### DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

datadatabrickspostgresendpoints.NewDataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.resetPgSettings">ResetPgSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPgSettings` <a name="ResetPgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.resetPgSettings"></a>

```go
func ResetPgSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.pgSettingsInput">PgSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.pgSettings">PgSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PgSettingsInput`<sup>Optional</sup> <a name="PgSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.pgSettingsInput"></a>

```go
func PgSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PgSettings`<sup>Required</sup> <a name="PgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.pgSettings"></a>

```go
func PgSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsSpecSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

datadatabrickspostgresendpoints.NewDataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup">DataDatabricksPostgresEndpointsEndpointsStatusGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableReadableSecondaries`<sup>Required</sup> <a name="EnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.enableReadableSecondaries"></a>

```go
func EnableReadableSecondaries() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresEndpointsEndpointsStatusGroup
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroup">DataDatabricksPostgresEndpointsEndpointsStatusGroup</a>

---


### DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

datadatabrickspostgresendpoints.NewDataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.readOnlyHost">ReadOnlyHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.readOnlyPooledHost">ReadOnlyPooledHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.readWritePooledHost">ReadWritePooledHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHosts">DataDatabricksPostgresEndpointsEndpointsStatusHosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `ReadOnlyHost`<sup>Required</sup> <a name="ReadOnlyHost" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.readOnlyHost"></a>

```go
func ReadOnlyHost() *string
```

- *Type:* *string

---

##### `ReadOnlyPooledHost`<sup>Required</sup> <a name="ReadOnlyPooledHost" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.readOnlyPooledHost"></a>

```go
func ReadOnlyPooledHost() *string
```

- *Type:* *string

---

##### `ReadWritePooledHost`<sup>Required</sup> <a name="ReadWritePooledHost" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.readWritePooledHost"></a>

```go
func ReadWritePooledHost() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresEndpointsEndpointsStatusHosts
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHosts">DataDatabricksPostgresEndpointsEndpointsStatusHosts</a>

---


### DataDatabricksPostgresEndpointsEndpointsStatusOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

datadatabrickspostgresendpoints.NewDataDatabricksPostgresEndpointsEndpointsStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresEndpointsEndpointsStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.currentState">CurrentState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.disabled">Disabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.group">Group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference">DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.hosts">Hosts</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference">DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.lastActiveTime">LastActiveTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.pendingState">PendingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference">DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatus">DataDatabricksPostgresEndpointsEndpointsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingLimitMaxCu`<sup>Required</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.autoscalingLimitMaxCu"></a>

```go
func AutoscalingLimitMaxCu() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCu`<sup>Required</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.autoscalingLimitMinCu"></a>

```go
func AutoscalingLimitMinCu() *f64
```

- *Type:* *f64

---

##### `CurrentState`<sup>Required</sup> <a name="CurrentState" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.currentState"></a>

```go
func CurrentState() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.group"></a>

```go
func Group() DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference">DataDatabricksPostgresEndpointsEndpointsStatusGroupOutputReference</a>

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.hosts"></a>

```go
func Hosts() DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference">DataDatabricksPostgresEndpointsEndpointsStatusHostsOutputReference</a>

---

##### `LastActiveTime`<sup>Required</sup> <a name="LastActiveTime" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.lastActiveTime"></a>

```go
func LastActiveTime() *string
```

- *Type:* *string

---

##### `PendingState`<sup>Required</sup> <a name="PendingState" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.pendingState"></a>

```go
func PendingState() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.settings"></a>

```go
func Settings() DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference">DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference</a>

---

##### `SuspendTimeoutDuration`<sup>Required</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.suspendTimeoutDuration"></a>

```go
func SuspendTimeoutDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresEndpointsEndpointsStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatus">DataDatabricksPostgresEndpointsEndpointsStatus</a>

---


### DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference <a name="DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

datadatabrickspostgresendpoints.NewDataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.resetPgSettings">ResetPgSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPgSettings` <a name="ResetPgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.resetPgSettings"></a>

```go
func ResetPgSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.pgSettingsInput">PgSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.pgSettings">PgSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettings">DataDatabricksPostgresEndpointsEndpointsStatusSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PgSettingsInput`<sup>Optional</sup> <a name="PgSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.pgSettingsInput"></a>

```go
func PgSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PgSettings`<sup>Required</sup> <a name="PgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.pgSettings"></a>

```go
func PgSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresEndpointsEndpointsStatusSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsEndpointsStatusSettings">DataDatabricksPostgresEndpointsEndpointsStatusSettings</a>

---


### DataDatabricksPostgresEndpointsProviderConfigOutputReference <a name="DataDatabricksPostgresEndpointsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresendpoints"

datadatabrickspostgresendpoints.NewDataDatabricksPostgresEndpointsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresEndpointsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresEndpoints.DataDatabricksPostgresEndpointsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



