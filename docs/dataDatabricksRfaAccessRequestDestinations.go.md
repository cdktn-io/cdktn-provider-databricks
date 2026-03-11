# `dataDatabricksRfaAccessRequestDestinations` Submodule <a name="`dataDatabricksRfaAccessRequestDestinations` Submodule" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksRfaAccessRequestDestinations <a name="DataDatabricksRfaAccessRequestDestinations" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations databricks_rfa_access_request_destinations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksrfaaccessrequestdestinations"

datadatabricksrfaaccessrequestdestinations.NewDataDatabricksRfaAccessRequestDestinations(scope Construct, id *string, config DataDatabricksRfaAccessRequestDestinationsConfig) DataDatabricksRfaAccessRequestDestinations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig">DataDatabricksRfaAccessRequestDestinationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig">DataDatabricksRfaAccessRequestDestinationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksRfaAccessRequestDestinationsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfig">DataDatabricksRfaAccessRequestDestinationsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksRfaAccessRequestDestinations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksrfaaccessrequestdestinations"

datadatabricksrfaaccessrequestdestinations.DataDatabricksRfaAccessRequestDestinations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksrfaaccessrequestdestinations"

datadatabricksrfaaccessrequestdestinations.DataDatabricksRfaAccessRequestDestinations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksrfaaccessrequestdestinations"

datadatabricksrfaaccessrequestdestinations.DataDatabricksRfaAccessRequestDestinations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksrfaaccessrequestdestinations"

datadatabricksrfaaccessrequestdestinations.DataDatabricksRfaAccessRequestDestinations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksRfaAccessRequestDestinations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksRfaAccessRequestDestinations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksRfaAccessRequestDestinations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksRfaAccessRequestDestinations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.areAnyDestinationsHidden">AreAnyDestinationsHidden</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList">DataDatabricksRfaAccessRequestDestinationsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.destinationSourceSecurable">DestinationSourceSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference">DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference">DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.securable">Securable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference">DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.fullNameInput">FullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.securableTypeInput">SecurableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.securableType">SecurableType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AreAnyDestinationsHidden`<sup>Required</sup> <a name="AreAnyDestinationsHidden" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.areAnyDestinationsHidden"></a>

```go
func AreAnyDestinationsHidden() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.destinations"></a>

```go
func Destinations() DataDatabricksRfaAccessRequestDestinationsDestinationsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList">DataDatabricksRfaAccessRequestDestinationsDestinationsList</a>

---

##### `DestinationSourceSecurable`<sup>Required</sup> <a name="DestinationSourceSecurable" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.destinationSourceSecurable"></a>

```go
func DestinationSourceSecurable() DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference">DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference">DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference</a>

---

##### `Securable`<sup>Required</sup> <a name="Securable" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.securable"></a>

```go
func Securable() DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference">DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference</a>

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.fullNameInput"></a>

```go
func FullNameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SecurableTypeInput`<sup>Optional</sup> <a name="SecurableTypeInput" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.securableTypeInput"></a>

```go
func SecurableTypeInput() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.securableType"></a>

```go
func SecurableType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksRfaAccessRequestDestinationsConfig <a name="DataDatabricksRfaAccessRequestDestinationsConfig" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksrfaaccessrequestdestinations"

&datadatabricksrfaaccessrequestdestinations.DataDatabricksRfaAccessRequestDestinationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FullName: *string,
	SecurableType: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.fullName">FullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#full_name DataDatabricksRfaAccessRequestDestinations#full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.securableType">SecurableType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#securable_type DataDatabricksRfaAccessRequestDestinations#securable_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfig">DataDatabricksRfaAccessRequestDestinationsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#provider_config DataDatabricksRfaAccessRequestDestinations#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.fullName"></a>

```go
FullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#full_name DataDatabricksRfaAccessRequestDestinations#full_name}.

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.securableType"></a>

```go
SecurableType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#securable_type DataDatabricksRfaAccessRequestDestinations#securable_type}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksRfaAccessRequestDestinationsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfig">DataDatabricksRfaAccessRequestDestinationsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#provider_config DataDatabricksRfaAccessRequestDestinations#provider_config}.

---

### DataDatabricksRfaAccessRequestDestinationsDestinations <a name="DataDatabricksRfaAccessRequestDestinationsDestinations" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksrfaaccessrequestdestinations"

&datadatabricksrfaaccessrequestdestinations.DataDatabricksRfaAccessRequestDestinationsDestinations {
	DestinationId: *string,
	DestinationType: *string,
	SpecialDestination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.destinationId">DestinationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#destination_id DataDatabricksRfaAccessRequestDestinations#destination_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.destinationType">DestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#destination_type DataDatabricksRfaAccessRequestDestinations#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.specialDestination">SpecialDestination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#special_destination DataDatabricksRfaAccessRequestDestinations#special_destination}. |

---

##### `DestinationId`<sup>Optional</sup> <a name="DestinationId" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.destinationId"></a>

```go
DestinationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#destination_id DataDatabricksRfaAccessRequestDestinations#destination_id}.

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#destination_type DataDatabricksRfaAccessRequestDestinations#destination_type}.

---

##### `SpecialDestination`<sup>Optional</sup> <a name="SpecialDestination" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.specialDestination"></a>

```go
SpecialDestination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#special_destination DataDatabricksRfaAccessRequestDestinations#special_destination}.

---

### DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurable <a name="DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurable" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksrfaaccessrequestdestinations"

&datadatabricksrfaaccessrequestdestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurable {
	FullName: *string,
	ProviderShare: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurable.property.fullName">FullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#full_name DataDatabricksRfaAccessRequestDestinations#full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurable.property.providerShare">ProviderShare</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#provider_share DataDatabricksRfaAccessRequestDestinations#provider_share}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurable.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#type DataDatabricksRfaAccessRequestDestinations#type}. |

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurable.property.fullName"></a>

```go
FullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#full_name DataDatabricksRfaAccessRequestDestinations#full_name}.

---

##### `ProviderShare`<sup>Optional</sup> <a name="ProviderShare" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurable.property.providerShare"></a>

```go
ProviderShare *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#provider_share DataDatabricksRfaAccessRequestDestinations#provider_share}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurable.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#type DataDatabricksRfaAccessRequestDestinations#type}.

---

### DataDatabricksRfaAccessRequestDestinationsProviderConfig <a name="DataDatabricksRfaAccessRequestDestinationsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksrfaaccessrequestdestinations"

&datadatabricksrfaaccessrequestdestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#workspace_id DataDatabricksRfaAccessRequestDestinations#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#workspace_id DataDatabricksRfaAccessRequestDestinations#workspace_id}.

---

### DataDatabricksRfaAccessRequestDestinationsSecurable <a name="DataDatabricksRfaAccessRequestDestinationsSecurable" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksrfaaccessrequestdestinations"

&datadatabricksrfaaccessrequestdestinations.DataDatabricksRfaAccessRequestDestinationsSecurable {
	FullName: *string,
	ProviderShare: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.fullName">FullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#full_name DataDatabricksRfaAccessRequestDestinations#full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.providerShare">ProviderShare</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#provider_share DataDatabricksRfaAccessRequestDestinations#provider_share}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#type DataDatabricksRfaAccessRequestDestinations#type}. |

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.fullName"></a>

```go
FullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#full_name DataDatabricksRfaAccessRequestDestinations#full_name}.

---

##### `ProviderShare`<sup>Optional</sup> <a name="ProviderShare" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.providerShare"></a>

```go
ProviderShare *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#provider_share DataDatabricksRfaAccessRequestDestinations#provider_share}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/rfa_access_request_destinations#type DataDatabricksRfaAccessRequestDestinations#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksRfaAccessRequestDestinationsDestinationsList <a name="DataDatabricksRfaAccessRequestDestinationsDestinationsList" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksrfaaccessrequestdestinations"

datadatabricksrfaaccessrequestdestinations.NewDataDatabricksRfaAccessRequestDestinationsDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksRfaAccessRequestDestinationsDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.get"></a>

```go
func Get(index *f64) DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference <a name="DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksrfaaccessrequestdestinations"

datadatabricksrfaaccessrequestdestinations.NewDataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetProviderShare">ResetProviderShare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFullName` <a name="ResetFullName" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetFullName"></a>

```go
func ResetFullName()
```

##### `ResetProviderShare` <a name="ResetProviderShare" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetProviderShare"></a>

```go
func ResetProviderShare()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.providerShareInput">ProviderShareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.providerShare">ProviderShare</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurable">DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fullNameInput"></a>

```go
func FullNameInput() *string
```

- *Type:* *string

---

##### `ProviderShareInput`<sup>Optional</sup> <a name="ProviderShareInput" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.providerShareInput"></a>

```go
func ProviderShareInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `ProviderShare`<sup>Required</sup> <a name="ProviderShare" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.providerShare"></a>

```go
func ProviderShare() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurable">DataDatabricksRfaAccessRequestDestinationsDestinationSourceSecurable</a>

---


### DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference <a name="DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksrfaaccessrequestdestinations"

datadatabricksrfaaccessrequestdestinations.NewDataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationId">ResetDestinationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetSpecialDestination">ResetSpecialDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationId` <a name="ResetDestinationId" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationId"></a>

```go
func ResetDestinationId()
```

##### `ResetDestinationType` <a name="ResetDestinationType" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationType"></a>

```go
func ResetDestinationType()
```

##### `ResetSpecialDestination` <a name="ResetSpecialDestination" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetSpecialDestination"></a>

```go
func ResetSpecialDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationIdInput">DestinationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestinationInput">SpecialDestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationId">DestinationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestination">SpecialDestination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations">DataDatabricksRfaAccessRequestDestinationsDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationIdInput`<sup>Optional</sup> <a name="DestinationIdInput" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationIdInput"></a>

```go
func DestinationIdInput() *string
```

- *Type:* *string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `SpecialDestinationInput`<sup>Optional</sup> <a name="SpecialDestinationInput" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestinationInput"></a>

```go
func SpecialDestinationInput() *string
```

- *Type:* *string

---

##### `DestinationId`<sup>Required</sup> <a name="DestinationId" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationId"></a>

```go
func DestinationId() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `SpecialDestination`<sup>Required</sup> <a name="SpecialDestination" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestination"></a>

```go
func SpecialDestination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksRfaAccessRequestDestinationsDestinations
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations">DataDatabricksRfaAccessRequestDestinationsDestinations</a>

---


### DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference <a name="DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksrfaaccessrequestdestinations"

datadatabricksrfaaccessrequestdestinations.NewDataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference <a name="DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabricksrfaaccessrequestdestinations"

datadatabricksrfaaccessrequestdestinations.NewDataDatabricksRfaAccessRequestDestinationsSecurableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetProviderShare">ResetProviderShare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFullName` <a name="ResetFullName" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetFullName"></a>

```go
func ResetFullName()
```

##### `ResetProviderShare` <a name="ResetProviderShare" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetProviderShare"></a>

```go
func ResetProviderShare()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.providerShareInput">ProviderShareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.providerShare">ProviderShare</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable">DataDatabricksRfaAccessRequestDestinationsSecurable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fullNameInput"></a>

```go
func FullNameInput() *string
```

- *Type:* *string

---

##### `ProviderShareInput`<sup>Optional</sup> <a name="ProviderShareInput" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.providerShareInput"></a>

```go
func ProviderShareInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `ProviderShare`<sup>Required</sup> <a name="ProviderShare" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.providerShare"></a>

```go
func ProviderShare() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksRfaAccessRequestDestinationsSecurable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable">DataDatabricksRfaAccessRequestDestinationsSecurable</a>

---



